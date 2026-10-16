@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul && (set PY=py -3) || (set PY=python)

if not exist ".venv\Scripts\python.exe" (
    echo Creating virtual environment...
    %PY% -m venv .venv || (echo Could not create venv. Is Python installed? & pause & exit /b 1)
)
echo Checking dependencies...
".venv\Scripts\python.exe" -m pip install -q -r requirements.txt || (echo Dependency install failed. & pause & exit /b 1)

echo.
echo Starting Website Crawler Studio... (the address is shown below; closing this window stops the app and any running crawl)
".venv\Scripts\python.exe" app.py
pause
