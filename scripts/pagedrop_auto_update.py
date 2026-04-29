from __future__ import annotations

import time
from pathlib import Path

from pagedrop_publish import ROOT, EXCLUDE_DIRS, ALLOWED_EXTENSIONS, publish

POLL_SECONDS = 5


def snapshot() -> dict[str, float]:
    state: dict[str, float] = {}
    for base in ROOT.rglob("*"):
        if not base.is_file():
            continue
        rel = base.relative_to(ROOT)
        if any(part in EXCLUDE_DIRS for part in rel.parts):
            continue
        if base.suffix.lower() not in ALLOWED_EXTENSIONS:
            continue
        try:
            state[rel.as_posix()] = base.stat().st_mtime
        except FileNotFoundError:
            continue
    return state


def main() -> int:
    print("Auto-update watcher started")
    print("Watching for file changes every 5 seconds...")
    last = snapshot()

    # Initial publish so watcher run guarantees latest state at startup.
    try:
        result = publish()
        print(f"Published: {result['data'].get('url')}")
    except Exception as exc:
        print(f"Initial publish failed: {exc}")

    while True:
        time.sleep(POLL_SECONDS)
        now = snapshot()
        if now != last:
            print("Change detected. Publishing...")
            try:
                result = publish()
                print(f"Updated: {result['data'].get('updatedAt')} | {result['data'].get('url')}")
                last = now
            except Exception as exc:
                print(f"Publish failed: {exc}")


if __name__ == "__main__":
    raise SystemExit(main())
