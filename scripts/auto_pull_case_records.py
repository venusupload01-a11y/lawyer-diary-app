from __future__ import annotations

import argparse
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PULL_SCRIPT = ROOT / "scripts" / "pull_case_records.py"
PUBLISH_SCRIPT = ROOT / "scripts" / "github_publish.py"


def run_once() -> int:
    proc = subprocess.run([sys.executable, str(PULL_SCRIPT)], cwd=str(ROOT))
    return proc.returncode


def run_publish() -> int:
    proc = subprocess.run([sys.executable, str(PUBLISH_SCRIPT)], cwd=str(ROOT))
    return proc.returncode


def main() -> int:
    parser = argparse.ArgumentParser(description="Auto-pull eCourts records into sync/latest-case-data.json")
    parser.add_argument("--interval-min", type=int, default=30, help="Polling interval in minutes (default: 30)")
    parser.add_argument("--publish", action="store_true", help="Publish changes to permanent GitHub Pages link")
    args = parser.parse_args()

    interval_seconds = max(1, args.interval_min) * 60
    print(f"[auto-pull] Started at {datetime.now().isoformat(timespec='seconds')}")
    print(f"[auto-pull] Interval: {args.interval_min} minute(s)")

    while True:
        ts = datetime.now().isoformat(timespec="seconds")
        print(f"[auto-pull] Pull start: {ts}")
        code = run_once()
        status = "OK" if code == 0 else f"FAILED({code})"
        print(f"[auto-pull] Pull end: {datetime.now().isoformat(timespec='seconds')} => {status}")
        if code == 0 and args.publish:
            print(f"[auto-pull] Publish start: {datetime.now().isoformat(timespec='seconds')}")
            publish_code = run_publish()
            publish_status = "OK" if publish_code == 0 else f"FAILED({publish_code})"
            print(f"[auto-pull] Publish end: {datetime.now().isoformat(timespec='seconds')} => {publish_status}")
        time.sleep(interval_seconds)


if __name__ == "__main__":
    raise SystemExit(main())
