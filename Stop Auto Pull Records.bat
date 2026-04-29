@echo off
taskkill /FI "WINDOWTITLE eq LawyerDiaryAutoPull" /F >nul 2>&1
echo Auto pull process stopped (if running).
pause
