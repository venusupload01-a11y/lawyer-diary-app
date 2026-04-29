@echo off
for /f "tokens=2" %%A in ('tasklist /v /fo list ^| findstr /i /c:"Window Title:" /c:"LawyerDiaryAutoPublish"') do (
  echo Stopping window %%A
)
taskkill /FI "WINDOWTITLE eq LawyerDiaryAutoPublish" /F >nul 2>&1
echo Auto update process stopped (if running).
pause
