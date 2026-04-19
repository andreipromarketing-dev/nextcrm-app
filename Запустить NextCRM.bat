@echo off
echo Запускаю NextCRM...
cd /d D:\MY-LIFE-SYSTEM\nextcrm-app-main
start pnpm dev
timeout /t 5 /nobreak >nul
start http://localhost:3000
echo NextCRM запущен! Открой http://localhost:3000 в браузере
pause