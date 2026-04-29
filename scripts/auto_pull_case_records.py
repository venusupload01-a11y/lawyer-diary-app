from __future__ import annotations

import argparse
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PULL_SCRIPT = ROOT / "scripts" / "pull_case_records.py"


def run_once() -> int:
    proc = subprocess.run([sys.executable, str(PULL_SCRIPT)], cwd=str(ROOT))
    return proc.returncode


def main() -> int:
    parser = argparse.ArgumentParser(description="Auto-pull eCourts records into sync/latest-case-data.json")
    parser.add_argument("--interval-min", type=int, default=30, help="Polling interval in minutes (default: 30)")
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
        time.sleep(interval_seconds)


if __name__ == "__main__":
    raise SystemExit(main())
