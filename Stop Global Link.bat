@echo off
taskkill /FI "WINDOWTITLE eq LawyerDiaryGlobalTunnel" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq LawyerDiaryGlobalHttp" /F >nul 2>&1
echo Global link processes stopped (if running).
pause
