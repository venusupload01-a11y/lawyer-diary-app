from __future__ import annotations

import json
import os
import sys
import zipfile
from pathlib import Path
from typing import Dict, Iterable, List

try:
    import requests
except Exception as exc:  # pragma: no cover
    print("ERROR: 'requests' package is required. Install with: python -m pip install requests")
    raise

ROOT = Path(__file__).resolve().parents[1]
RUNTIME_DIR = ROOT / "share-runtime"
CONFIG_PATH = RUNTIME_DIR / "pagedrop-response.json"
LAST_UPDATE_PATH = RUNTIME_DIR / "pagedrop-last-update.json"
ZIP_PATH = RUNTIME_DIR / "site-deploy.zip"

EXCLUDE_DIRS = {".git", "__pycache__", ".venv", "share-runtime", "scripts"}
ALLOWED_EXTENSIONS = {
    ".html", ".css", ".js", ".pdf", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico",
    ".json", ".txt", ".xml", ".woff", ".woff2", ".ttf", ".otf", ".webmanifest"
}
MAX_UPLOAD_FILE_SIZE_BYTES = 20 * 1024 * 1024
MAX_ZIP_UPLOAD_BYTES = 9_500_000
CORE_RELATIVE_FILES = {
    "index.html",
    "styles.css",
    "app.js",
    "manifest.webmanifest",
    "service-worker.js",
    "sync/latest-case-data.json",
}


def load_site_config() -> Dict[str, str]:
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(
            f"Missing config file: {CONFIG_PATH}. Create a PageDrop site first and save siteId/deleteToken."
        )

    with CONFIG_PATH.open("r", encoding="utf-8") as f:
        payload = json.load(f)

    data = payload.get("data", payload)
    site_id = data.get("siteId")
    delete_token = data.get("deleteToken")
    url = data.get("url")

    if not site_id or not delete_token:
        raise ValueError("Config file does not contain siteId/deleteToken.")

    return {
        "site_id": site_id,
        "delete_token": delete_token,
        "url": url or f"https://pagedrop.dev/s/{site_id}",
    }


def iter_site_files() -> Iterable[Path]:
    for base, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for name in files:
            full = Path(base) / name
            if full == ZIP_PATH:
                continue
            if full.suffix.lower() not in ALLOWED_EXTENSIONS:
                continue
            try:
                if full.stat().st_size > MAX_UPLOAD_FILE_SIZE_BYTES:
                    continue
            except FileNotFoundError:
                continue
            yield full


def _priority(rel: str) -> int:
    if rel in CORE_RELATIVE_FILES:
        return 0
    if rel.startswith("references/") and rel.lower().endswith(".pdf"):
        return 1
    if rel.startswith("attachments/"):
        return 2
    if rel.startswith("references/"):
        return 3
    if rel.startswith("gift-images/"):
        return 4
    return 5


def build_zip() -> List[str]:
    RUNTIME_DIR.mkdir(parents=True, exist_ok=True)
    packed: List[str] = []
    candidates: list[tuple[int, str, Path]] = []

    for full in iter_site_files():
        rel = full.relative_to(ROOT).as_posix()
        try:
            size = full.stat().st_size
        except FileNotFoundError:
            continue
        candidates.append((size, rel, full))

    candidates.sort(key=lambda x: (_priority(x[1]), x[0], x[1]))

    included = []
    total_bytes = 0
    skipped = []

    for size, rel, full in candidates:
        if total_bytes + size > MAX_ZIP_UPLOAD_BYTES:
            skipped.append(rel)
            continue
        included.append((rel, full))
        total_bytes += size

    missing_core = [rel for rel in CORE_RELATIVE_FILES if rel not in {rel for rel, _ in included}]
    if missing_core:
        raise RuntimeError(f"Cannot build deploy zip within size limit; missing core files: {missing_core}")

    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as archive:
        for rel, full in included:
            archive.write(full, rel)
            packed.append(rel)

    if not packed:
        raise RuntimeError("No deployable files found.")

    print(f"Zip source bytes selected: {total_bytes} (limit: {MAX_ZIP_UPLOAD_BYTES})")
    if skipped:
        print(f"Skipped {len(skipped)} file(s) due to size budget.")

    return packed


def create_site() -> Dict[str, object]:
    packed_files = build_zip()
    with ZIP_PATH.open("rb") as f:
        files = {"file": ("site-deploy.zip", f, "application/zip")}
        response = requests.post("https://pagedrop.dev/api/v1/sites", files=files, timeout=180)
    if response.status_code != 201:
        raise RuntimeError(f"Create failed ({response.status_code}): {response.text}")

    payload = response.json()
    data = payload.get("data", {})
    site_id = data.get("siteId")
    delete_token = data.get("deleteToken")
    url = data.get("url")
    if not site_id or not delete_token or not url:
        raise RuntimeError("Create response missing siteId/deleteToken/url")

    record = {
        "status": "success",
        "data": {
            "siteId": site_id,
            "url": url,
            "updatedAt": data.get("createdAt"),
            "files": data.get("files") or packed_files,
            "totalSizeBytes": data.get("totalSizeBytes"),
            "deleteToken": delete_token,
        },
    }
    with LAST_UPDATE_PATH.open("w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)
    with CONFIG_PATH.open("w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)
    return record


def publish() -> Dict[str, object]:
    config = load_site_config()
    packed_files = build_zip()

    endpoint = f"https://pagedrop.dev/api/v1/sites/{config['site_id']}"
    headers = {"X-Delete-Token": config["delete_token"]}

    with ZIP_PATH.open("rb") as f:
        files = {"file": ("site-deploy.zip", f, "application/zip")}
        response = requests.put(endpoint, headers=headers, files=files, timeout=180)

    if response.status_code != 200:
        raise RuntimeError(f"Update failed ({response.status_code}): {response.text}")

    payload = response.json()
    data = payload.get("data", {})

    record = {
        "status": "success",
        "data": {
            "siteId": config["site_id"],
            "url": data.get("url") or config["url"],
            "updatedAt": data.get("updatedAt"),
            "files": data.get("files") or packed_files,
            "totalSizeBytes": data.get("totalSizeBytes"),
            "deleteToken": config["delete_token"],
        },
    }

    with LAST_UPDATE_PATH.open("w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)

    # keep primary config current as well
    with CONFIG_PATH.open("w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)

    return record


def main() -> int:
    recreate = "--recreate" in sys.argv
    try:
        result = create_site() if recreate else publish()
    except Exception as exc:
        print(f"ERROR: {exc}")
        return 1

    data = result["data"]
    print("PageDrop update successful")
    print(f"URL: {data.get('url')}")
    print(f"Site ID: {data.get('siteId')}")
    print(f"Updated At: {data.get('updatedAt')}")
    print(f"Files: {len(data.get('files') or [])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
