@echo off
cd /d "%~dp0"
if not exist "share-runtime" mkdir "share-runtime"
echo Starting global HTTP server on port 8787...
start "LawyerDiaryGlobalHttp" /min cmd /c "python -m http.server 8787 --bind 0.0.0.0 >> share-runtime\global-http.log 2>&1"
echo Starting global tunnel...
start "LawyerDiaryGlobalTunnel" /min cmd /c "ssh -o StrictHostKeyChecking=accept-new -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -R 80:localhost:8787 nokey@localhost.run >> share-runtime\global-tunnel.log 2>&1"
echo.
echo Global tunnel starting. Wait 10-20 seconds, then open:
echo share-runtime\global-tunnel.log
echo and copy the https://... URL from the latest lines.
pause
