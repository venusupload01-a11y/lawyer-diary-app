from __future__ import annotations

import json
import os
import sys
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
SYNC_PATH = ROOT / "sync" / "latest-case-data.json"
FALLBACK_PATH = ROOT / "sync" / "reminder-data.json"


@dataclass
class ReminderItem:
    case_name: str
    kind: str
    due_date: str
    title: str
    detail: str


def parse_ymd(value: str) -> datetime | None:
    raw = str(value or "").strip()
    if not raw:
        return None
    for fmt in ("%Y-%m-%d", "%d-%m-%Y", "%d/%m/%Y"):
        try:
            dt = datetime.strptime(raw, fmt)
            return dt
        except ValueError:
            continue
    return None


def normalize_case_name(case_id: str) -> str:
    names = {
        "case-main": "PWDVA JMFC Court",
        "case-sessions": "Session Court - Appeal",
    }
    return names.get(case_id, case_id)


def load_sync_cases() -> list[dict[str, Any]]:
    if not SYNC_PATH.exists():
        return []
    payload = json.loads(SYNC_PATH.read_text(encoding="utf-8"))
    cases = payload.get("cases", {})
    if not isinstance(cases, dict) or not cases:
        return []

    out: list[dict[str, Any]] = []
    for case_id, patch in cases.items():
        if not isinstance(patch, dict):
            continue
        out.append(
            {
                "caseId": case_id,
                "caseName": normalize_case_name(case_id),
                "hearings": patch.get("hearings") or [],
                "tasks": patch.get("tasks") or [],
            }
        )
    return out


def load_fallback_cases() -> list[dict[str, Any]]:
    if not FALLBACK_PATH.exists():
        return []
    payload = json.loads(FALLBACK_PATH.read_text(encoding="utf-8"))
    cases = payload.get("cases", [])
    if not isinstance(cases, list):
        return []
    return [c for c in cases if isinstance(c, dict)]


def load_cases() -> list[dict[str, Any]]:
    sync_cases = load_sync_cases()
    if sync_cases:
        return sync_cases
    return load_fallback_cases()


def collect_due_items(cases: list[dict[str, Any]], today: datetime, day_offsets: set[int]) -> dict[int, list[ReminderItem]]:
    buckets: dict[int, list[ReminderItem]] = {offset: [] for offset in sorted(day_offsets)}

    for case in cases:
        case_name = str(case.get("caseName") or case.get("caseId") or "Case")

        for hearing in case.get("hearings", []) or []:
            if not isinstance(hearing, dict):
                continue
            dt = parse_ymd(str(hearing.get("hearingDate", "")))
            if not dt:
                continue
            diff_days = (dt.date() - today.date()).days
            if diff_days not in day_offsets:
                continue
            purpose = str(hearing.get("purpose") or "-")
            judge = str(hearing.get("judge") or "-")
            buckets[diff_days].append(
                ReminderItem(
                    case_name=case_name,
                    kind="Hearing",
                    due_date=dt.strftime("%Y-%m-%d"),
                    title=f"{purpose}",
                    detail=f"Judge: {judge}",
                )
            )

        for task in case.get("tasks", []) or []:
            if not isinstance(task, dict):
                continue
            dt = parse_ymd(str(task.get("dueDate", "")))
            if not dt:
                continue
            if bool(task.get("done")):
                continue
            diff_days = (dt.date() - today.date()).days
            if diff_days not in day_offsets:
                continue
            text = str(task.get("text") or "Task")
            buckets[diff_days].append(
                ReminderItem(
                    case_name=case_name,
                    kind="Task",
                    due_date=dt.strftime("%Y-%m-%d"),
                    title=text,
                    detail="Pending action",
                )
            )

    return buckets


def format_date_human(iso_ymd: str) -> str:
    dt = parse_ymd(iso_ymd)
    if not dt:
        return iso_ymd
    return dt.strftime("%d %b %Y")


def build_message(today: datetime, buckets: dict[int, list[ReminderItem]]) -> str:
    lines = [
        "Lawyer Diary Auto Reminder",
        f"Run Date: {today.strftime('%d %b %Y')} (Asia/Kolkata)",
    ]

    labels = {
        0: "Due Today",
        1: "Due Tomorrow",
    }

    any_items = False
    for offset in sorted(buckets.keys()):
        items = buckets[offset]
        if not items:
            continue
        any_items = True
        lines.append("")
        lines.append(labels.get(offset, f"Due in {offset} day(s)"))
        for item in items:
            lines.append(
                f"- [{item.case_name}] {item.kind}: {item.title} | {format_date_human(item.due_date)} | {item.detail}"
            )

    if not any_items:
        lines.append("")
        lines.append("No due hearing/task reminders for configured offsets.")

    return "\n".join(lines)


def send_telegram_message(token: str, chat_id: str, text: str) -> None:
    endpoint = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "disable_web_page_preview": "true",
    }
    data = urlencode(payload).encode("utf-8")
    req = Request(endpoint, data=data, method="POST")
    with urlopen(req, timeout=30) as resp:
        body = resp.read().decode("utf-8", errors="ignore")
    parsed = json.loads(body)
    if not parsed.get("ok"):
        raise RuntimeError(f"Telegram send failed: {parsed}")


def parse_offsets(raw: str) -> set[int]:
    result: set[int] = set()
    for part in str(raw or "").split(","):
        p = part.strip()
        if not p:
            continue
        try:
            result.add(int(p))
        except ValueError:
            continue
    if not result:
        result = {0}
    return result


def main() -> int:
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    chat_ids_raw = os.environ.get("TELEGRAM_CHAT_IDS", "").strip() or os.environ.get("TELEGRAM_CHAT_ID", "").strip()
    tz_name = os.environ.get("REMINDER_TIMEZONE", "Asia/Kolkata").strip() or "Asia/Kolkata"
    day_offsets = parse_offsets(os.environ.get("REMINDER_DAYS_AHEAD", "0,1"))
    send_empty = os.environ.get("REMINDER_SEND_EMPTY", "false").strip().lower() == "true"

    if not token:
        print("ERROR: TELEGRAM_BOT_TOKEN is missing.")
        return 1
    if not chat_ids_raw:
        print("ERROR: TELEGRAM_CHAT_ID or TELEGRAM_CHAT_IDS is missing.")
        return 1

    try:
        tz = ZoneInfo(tz_name)
    except Exception:
        print(f"ERROR: Invalid timezone '{tz_name}'.")
        return 1

    cases = load_cases()
    if not cases:
        print("ERROR: No reminder case data found in sync files.")
        return 1

    now_local = datetime.now(tz)
    today_local = datetime(now_local.year, now_local.month, now_local.day)
    buckets = collect_due_items(cases, today_local, day_offsets)

    has_items = any(buckets[offset] for offset in buckets)
    if not has_items and not send_empty:
        print("No due reminders. Message not sent.")
        return 0

    text = build_message(today_local, buckets)
    chat_ids = [cid.strip() for cid in chat_ids_raw.split(",") if cid.strip()]

    try:
        for chat_id in chat_ids:
            send_telegram_message(token, chat_id, text)
    except (HTTPError, URLError, TimeoutError, RuntimeError) as exc:
        print(f"ERROR: {exc}")
        return 1

    print("Telegram reminder sent successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
