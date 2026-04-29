@echo off
cd /d "%~dp0"
for /f %%I in ('powershell -NoProfile -Command "(Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -ne '127.0.0.1' -and $_.IPAddress -like '192.168.*' } | Select-Object -First 1 -ExpandProperty IPAddress)"') do set LANIP=%%I
if "%LANIP%"=="" set LANIP=127.0.0.1
echo.
echo Share this link on same Wi-Fi/LAN:
echo http://%LANIP%:8787/index.html
echo.
start "" http://%LANIP%:8787/index.html
python -m http.server 8787 --bind 0.0.0.0
