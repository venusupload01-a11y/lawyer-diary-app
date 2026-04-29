from __future__ import annotations

import json
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PERMANENT_URL = "https://venusupload01-a11y.github.io/lawyer-diary-app/"
OWNER = "venusupload01-a11y"
REPO = "lawyer-diary-app"
BRANCH = "main"


def run(cmd: list[str], check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        cmd,
        cwd=str(ROOT),
        text=True,
        capture_output=True,
        check=check,
    )


def has_changes() -> bool:
    proc = run(["git", "status", "--porcelain"], check=True)
    return bool(proc.stdout.strip())


def ensure_link_files() -> None:
    text = (
        "Permanent public viewer link:\n"
        f"{PERMANENT_URL}\n\n"
        "This URL stays the same and updates after each publish push.\n"
    )
    (ROOT / "PERMANENT_LINK.txt").write_text(text, encoding="utf-8")
    (ROOT / "GLOBAL_LINK.txt").write_text(PERMANENT_URL + "\n", encoding="utf-8")


def wait_for_pages_build(timeout_sec: int = 240) -> tuple[bool, str]:
    start = time.time()
    last_status = "unknown"
    while time.time() - start <= timeout_sec:
        proc = run(
            [
                "gh",
                "api",
                f"repos/{OWNER}/{REPO}/pages/builds/latest",
                "--jq",
                "{status: .status, url: .url, error: .error.message}",
            ],
            check=False,
        )
        if proc.returncode != 0:
            return False, "Unable to read Pages build status."
        try:
            payload = json.loads(proc.stdout or "{}")
        except json.JSONDecodeError:
            return False, "Invalid build status response."

        status = str(payload.get("status") or "").lower()
        last_status = status or "unknown"
        if status == "built":
            return True, "built"
        if status in {"errored", "error", "failed"}:
            err = payload.get("error") or "Build failed."
            return False, str(err)
        time.sleep(5)
    return False, f"Timed out waiting for build (last status: {last_status})."


def publish() -> int:
    ensure_link_files()
    run(["git", "add", "-A"], check=True)

    if not has_changes():
        print("No changes to publish.")
        print(f"URL: {PERMANENT_URL}")
        return 0

    stamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    run(["git", "commit", "-m", f"Update Lawyer Diary data ({stamp})"], check=True)
    run(["git", "push", "origin", BRANCH], check=True)

    ok, status = wait_for_pages_build()
    if ok:
        print("Publish successful and Pages build completed.")
    else:
        print(f"Publish pushed, but Pages status check: {status}")
    print(f"URL: {PERMANENT_URL}")
    return 0


def main() -> int:
    try:
        return publish()
    except subprocess.CalledProcessError as exc:
        print("Command failed:")
        print(" ".join(exc.cmd))
        if exc.stdout:
            print(exc.stdout.strip())
        if exc.stderr:
            print(exc.stderr.strip())
        return 1
    except Exception as exc:
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
