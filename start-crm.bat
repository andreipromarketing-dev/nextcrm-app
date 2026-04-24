@echo off
cd /d D:\MY-LIFE-SYSTEM\nextcrm-app-main

echo ========================================
echo    ЗАПУСК NEXTCRM
echo ========================================

echo.
echo Проверка PostgreSQL...
sc query postgresql-x64-18 >nul 2>&1
if %errorlevel% neq 0 (
    echo     PostgreSQL не запущен. Запускаю...
    net start postgresql-x64-18
    if %errorlevel% neq 0 (
        echo     ОШИБКА: Не удалось запустить PostgreSQL
        pause
        exit /b 1
    )
    echo     PostgreSQL запущен
) else (
    echo     PostgreSQL уже запущен
)

timeout /t 2 /nobreak >nul

echo.
echo [2/2] Запуск NextCRM...
cd /d D:\MY-LIFE-SYSTEM\nextcrm-app-main
echo     NextCRM запускается...
echo     Открой http://localhost:3000
echo ========================================
echo.

start http://localhost:3000
call pnpm dev
pause