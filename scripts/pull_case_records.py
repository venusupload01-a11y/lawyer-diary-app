from __future__ import annotations

import json
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any
from urllib.parse import urljoin

try:
    import requests
    from bs4 import BeautifulSoup
except Exception:
    print("ERROR: Missing dependencies. Run: python -m pip install requests beautifulsoup4")
    raise

ROOT = Path(__file__).resolve().parents[1]
SYNC_DIR = ROOT / "sync"
CONFIG_PATH = SYNC_DIR / "pull-config.json"
OUTPUT_PATH = SYNC_DIR / "latest-case-data.json"
RAW_DIR = SYNC_DIR / "raw"

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", (value or "").replace("\xa0", " ")).strip()


def normalize_label(value: str) -> str:
    text = clean_text(value).lower()
    text = text.replace(":", "")
    return re.sub(r"[^a-z0-9 ]+", "", text)


def parse_date(raw: str) -> str:
    value = clean_text(raw)
    if not value or value == "-":
        return ""
    for fmt in ("%d-%m-%Y", "%d/%m/%Y", "%Y-%m-%d", "%d %B %Y", "%d %b %Y"):
        try:
            return datetime.strptime(value, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return value


def fetch_source(source: str, timeout: int = 45) -> tuple[str, str]:
    src = clean_text(source)
    if not src:
        raise ValueError("Empty source")

    if src.startswith("http://") or src.startswith("https://"):
        response = requests.get(src, headers={"User-Agent": USER_AGENT}, timeout=timeout)
        response.raise_for_status()
        return response.text, src

    path = Path(src)
    if not path.is_absolute():
        path = ROOT / src
    if not path.exists():
        raise FileNotFoundError(f"Source not found: {path}")
    return path.read_text(encoding="utf-8", errors="ignore"), f"file://{path.as_posix()}"


def extract_label_value_map(soup: BeautifulSoup) -> dict[str, str]:
    pairs: dict[str, str] = {}
    for row in soup.select("tr"):
        cells = row.find_all(["th", "td"])
        if len(cells) < 2:
            continue
        texts = [clean_text(c.get_text(" ", strip=True)) for c in cells]
        for i in range(0, len(texts) - 1, 2):
            key = normalize_label(texts[i])
            val = texts[i + 1]
            if key and val and val != "-" and key not in pairs:
                pairs[key] = val
    return pairs


def find_case_history_table(soup: BeautifulSoup):
    for table in soup.find_all("table"):
        headers = [normalize_label(th.get_text(" ", strip=True)) for th in table.find_all("th")]
        if any("hearing date" in h for h in headers) and any("purpose" in h for h in headers):
            return table, headers
    return None, []


def find_interim_orders_table(soup: BeautifulSoup):
    for table in soup.find_all("table"):
        headers = [normalize_label(th.get_text(" ", strip=True)) for th in table.find_all("th")]
        if any("order date" in h for h in headers) and any("order details" in h or "details" in h for h in headers):
            return table, headers
    return None, []


def parse_case_history(soup: BeautifulSoup) -> list[dict[str, Any]]:
    table, headers = find_case_history_table(soup)
    if not table:
        return []

    idx = {
        "judge": next((i for i, h in enumerate(headers) if "judge" in h), 0),
        "business": next((i for i, h in enumerate(headers) if "business" in h), 1),
        "hearing": next((i for i, h in enumerate(headers) if "hearing date" in h), 2),
        "purpose": next((i for i, h in enumerate(headers) if "purpose" in h), 3),
    }

    rows: list[dict[str, Any]] = []
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if not cells:
            continue
        data = [clean_text(cell.get_text(" ", strip=True)) for cell in cells]
        if len(data) <= idx["hearing"]:
            continue
        hearing = parse_date(data[idx["hearing"]])
        if not hearing:
            continue
        entry = {
            "businessDate": parse_date(data[idx["business"]]) if len(data) > idx["business"] else hearing,
            "hearingDate": hearing,
            "purpose": data[idx["purpose"]] if len(data) > idx["purpose"] else "-",
            "judge": data[idx["judge"]] if len(data) > idx["judge"] else "-",
        }
        rows.append(entry)

    dedup = {}
    for item in rows:
        key = (item["hearingDate"], item["businessDate"], item["purpose"], item["judge"])
        dedup[key] = item
    return sorted(dedup.values(), key=lambda x: (x["hearingDate"], x["businessDate"]))


def parse_orders(soup: BeautifulSoup, base_url: str) -> list[dict[str, Any]]:
    table, headers = find_interim_orders_table(soup)
    if not table:
        return []

    idx_date = next((i for i, h in enumerate(headers) if "order date" in h), 1)
    idx_details = next((i for i, h in enumerate(headers) if "order details" in h or "details" in h), 2)
    idx_number = next((i for i, h in enumerate(headers) if "order number" in h or h == "no"), 0)

    result = []
    order_no = 1
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if not cells:
            continue
        texts = [clean_text(c.get_text(" ", strip=True)) for c in cells]
        if len(texts) <= idx_details:
            continue
        date = parse_date(texts[idx_date]) if len(texts) > idx_date else ""
        details = texts[idx_details] if len(texts) > idx_details else "Order on Exhibit"
        if not date:
            continue

        attachments = []
        details_cell = cells[idx_details] if len(cells) > idx_details else None
        if details_cell:
            for link in details_cell.find_all("a", href=True):
                href = clean_text(link.get("href", ""))
                if not href:
                    continue
                attachments.append(
                    {
                        "label": clean_text(link.get_text(" ", strip=True)) or "Order Document",
                        "path": urljoin(base_url, href) if base_url.startswith("http") else href,
                    }
                )

        parsed_number = None
        if len(texts) > idx_number:
            try:
                parsed_number = int(re.sub(r"[^0-9]", "", texts[idx_number]))
            except Exception:
                parsed_number = None
        result.append(
            {
                "orderNumber": parsed_number or order_no,
                "date": date,
                "details": details or "Order on Exhibit",
                "attachments": attachments,
            }
        )
        order_no += 1
    return result


def parse_case_payload(html: str, base_url: str) -> dict[str, Any]:
    soup = BeautifulSoup(html, "html.parser")
    pairs = extract_label_value_map(soup)

    profile = {}
    label_map = {
        "case type": "caseType",
        "filing number": "filingNumber",
        "registration number": "registrationNumber",
        "cnr number": "cnrNumber",
        "efiling number": "eFilingNumber",
        "filing date": "filingDate",
        "registration date": "registrationDate",
        "efiling date": "eFilingDate",
        "first hearing date": "firstHearingDate",
        "next hearing date": "nextHearingDate",
        "case stage": "currentStage",
        "court number and judge": "judge",
    }

    for raw_key, target in label_map.items():
        value = next((v for k, v in pairs.items() if raw_key in k), "")
        if not value:
            continue
        profile[target] = parse_date(value) if "date" in target.lower() else value

    patch: dict[str, Any] = {}
    if profile:
        patch["profile"] = profile

    hearings = parse_case_history(soup)
    if hearings:
        patch["hearings"] = hearings

    orders = parse_orders(soup, base_url)
    if orders:
        patch["orders"] = orders

    return patch


def load_config() -> dict[str, Any]:
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(f"Missing config file: {CONFIG_PATH}")
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


def run_pull() -> dict[str, Any]:
    config = load_config()
    cases_cfg = config.get("cases", [])
    if not isinstance(cases_cfg, list) or not cases_cfg:
        raise ValueError("Config 'cases' must be a non-empty list.")

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    output_cases: dict[str, Any] = {}
    errors: list[str] = []

    for item in cases_cfg:
        case_id = clean_text(str(item.get("caseId", "")))
        source = clean_text(str(item.get("source", "")))
        if not case_id or not source:
            continue
        try:
            html, base_url = fetch_source(source, timeout=int(item.get("timeoutSec", 45)))
            (RAW_DIR / f"{case_id}.html").write_text(html, encoding="utf-8")
            patch = parse_case_payload(html, base_url)
            if patch:
                output_cases[case_id] = patch
            else:
                errors.append(f"{case_id}: parsed but no usable records")
        except Exception as exc:
            errors.append(f"{case_id}: {exc}")

    payload = {
        "generatedAt": datetime.utcnow().replace(microsecond=0).isoformat() + "Z",
        "revision": datetime.utcnow().strftime("%Y%m%d%H%M%S"),
        "cases": output_cases,
        "errors": errors,
    }

    SYNC_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    if not output_cases:
        raise RuntimeError("No cases were updated. " + (" | ".join(errors) if errors else ""))
    return payload


def main() -> int:
    try:
        payload = run_pull()
    except Exception as exc:
        print(f"ERROR: {exc}")
        return 1

    print("Case record pull complete.")
    print(f"Generated: {payload.get('generatedAt')}")
    print(f"Cases updated: {', '.join(payload.get('cases', {}).keys()) or 'none'}")
    print(f"Output: {OUTPUT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
