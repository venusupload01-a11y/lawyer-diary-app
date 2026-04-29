@echo off
cd /d "%~dp0"
echo Starting Lawyer's Diary in offline local mode...
start "" http://127.0.0.1:8787/index.html
python -m http.server 8787
