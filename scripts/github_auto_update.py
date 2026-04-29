from __future__ import annotations

import time
from pathlib import Path

from github_publish import ROOT, publish

POLL_SECONDS = 10
EXCLUDE_DIRS = {".git", "__pycache__", "share-runtime"}
ALLOWED_EXTENSIONS = {
    ".html",
    ".css",
    ".js",
    ".pdf",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".ico",
    ".json",
    ".txt",
    ".xml",
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".webmanifest",
    ".py",
    ".bat",
    ".md",
}


def snapshot() -> dict[str, float]:
    state: dict[str, float] = {}
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT)
        if any(part in EXCLUDE_DIRS for part in rel.parts):
            continue
        if path.suffix.lower() not in ALLOWED_EXTENSIONS:
            continue
        try:
            state[rel.as_posix()] = path.stat().st_mtime
        except FileNotFoundError:
            continue
    return state


def main() -> int:
    print("Auto-update watcher started (GitHub Pages)")
    print("Watching for changes every 10 seconds...")
    last = snapshot()

    while True:
        time.sleep(POLL_SECONDS)
        now = snapshot()
        if now != last:
            print("Change detected. Publishing to permanent link...")
            code = publish()
            if code == 0:
                last = now
            else:
                print("Publish failed; will retry on next change.")


if __name__ == "__main__":
    raise SystemExit(main())
