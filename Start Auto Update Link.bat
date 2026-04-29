@echo off
cd /d "%~dp0"
if not exist "share-runtime" mkdir "share-runtime"
start "LawyerDiaryAutoPublish" /min cmd /c "python scripts\pagedrop_auto_update.py >> share-runtime\auto-publish.log 2>&1"
echo Auto update started. Check share-runtime\auto-publish.log
pause
