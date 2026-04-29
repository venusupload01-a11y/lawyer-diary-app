@echo off
cd /d "%~dp0"
python scripts\pull_case_records.py
if %errorlevel% neq 0 goto :end
python scripts\github_publish.py
:end
pause
