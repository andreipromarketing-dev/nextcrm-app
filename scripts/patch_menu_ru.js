const fs = require('fs');

const path = 'd:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/ru.json';
const ru = JSON.parse(fs.readFileSync(path, 'utf8'));

// Menu items
ru.dashboard = "Дашборд";
ru.campaigns = "Кампании";
ru.campaignsAll = "Все кампании";
ru.campaignsTemplates = "Шаблоны";
ru.campaignsTargets = "Целевые аудитории";
ru.campaignsTargetLists = "Списки рассылки";
ru.projects = "Проекты";
ru.emails = "E-mail";
ru.reports = "Отчеты";
ru.documents = "Документы";
ru.invoices = "Счета";
ru.settings = "Настройки";

fs.writeFileSync(path, JSON.stringify(ru, null, 2), 'utf8');
console.log('ru.json menu strings patched');
