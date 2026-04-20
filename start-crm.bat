@echo off
setlocal enabledelayedexpansion

echo ========================================
echo    ЗАПУСК NEXTCRM
echo ========================================

REM Проверка и запуск PostgreSQL
echo.
echo [1/2] Проверка PostgreSQL...
sc query postgresql-x64-18 >nul 2>&1
if %errorlevel% neq 0 (
    echo     PostgreSQL не запущен. Запускаю...
    net start postgresql-x64-18
    if !errorlevel! neq 0 (
        echo     ОШИБКА: Не удалось запустить PostgreSQL
        echo     Убедись что PostgreSQL установлен как служба
        pause
        exit /b 1
    )
    echo     PostgreSQL запущен
) else (
    echo     PostgreSQL уже запущен
)

REM Ожидание запуска PostgreSQL
timeout /t 2 /nobreak >nul

echo.
echo [2/2] Запуск NextCRM...
cd /d D:\MY-LIFE-SYSTEM\nextcrm-app-main
if errorlevel 1 (
    echo ОШИБКА: Не удалось перейти в папку проекта
    pause
    exit /b 1
)
echo.
echo    NextCRM запускается...
echo    Открой http://localhost:3000 в браузере
echo ========================================
echo.
echo Запуск pnpm dev...

REM Запуск pnpm dev и открытие в Chrome инкогнито
start "" cmd /k "cd /d D:\MY-LIFE-SYSTEM\nextcrm-app-main && pnpm dev"
timeout /t 8 /nobreak >nul
start chrome --incognito http://localhost:3000