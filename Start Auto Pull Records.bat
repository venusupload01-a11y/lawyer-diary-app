@echo off
cd /d "%~dp0"
if not exist "share-runtime" mkdir "share-runtime"
start "LawyerDiaryAutoPull" /min cmd /c "python scripts\auto_pull_case_records.py --interval-min 30 >> share-runtime\auto-pull-records.log 2>&1"
echo Auto pull started. Check share-runtime\auto-pull-records.log
pause
