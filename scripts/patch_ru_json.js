const fs = require('fs');

const path = 'd:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/ru.json';
const ru = JSON.parse(fs.readFileSync(path, 'utf8'));

// Apply translations for Exact Matches
ru.RootLayout.title = "NextCRM"; // Leave brand as is
// Keep locale select as is: ru.RegisterComponent.locale ...
if (ru.Common) ru.Common.email = "Email"; 
ru.CrmPage.title = "CRM";
ru.CrmContactForm.twitter = "Twitter";
ru.CrmContactForm.facebook = "Facebook";
ru.CrmContactForm.skype = "Skype";
ru.CrmContactForm.youtube = "YouTube";
ru.CrmContactForm.tiktok = "TikTok";

ru.ReportsPage.from = "От";
ru.ReportsPage.to = "До";
ru.ReportsPage.filters = "Фильтры";
ru.ReportsPage.all = "Все";

ru.ReportsPage.leadsTitle = "Отчеты по лидам и контактам";
ru.ReportsPage.leadsDescription = "Лидогенерация и аналитика контактов";
ru.ReportsPage.accountsTitle = "Отчеты по контрагентам";
ru.ReportsPage.accountsDescription = "Рост и сегментация контрагентов";
ru.ReportsPage.activityTitle = "Отчеты по активности";
ru.ReportsPage.activityDescription = "Аналитика задач и активности";
ru.ReportsPage.campaignsTitle = "Отчеты по кампаниям";
ru.ReportsPage.campaignsDescription = "Аналитика e-mail рассылок";
ru.ReportsPage.usersTitle = "Отчеты по пользователям";
ru.ReportsPage.usersDescription = "Аналитика активности и роста пользователей";

ru.ReportsPage.sales = ru.ReportsPage.sales || {};
ru.ReportsPage.sales.title = "Отчеты по продажам";
ru.ReportsPage.sales.description = "Аналитика выручки, воронки и сделок";
ru.ReportsPage.sales.revenue = "Общая выручка";
ru.ReportsPage.sales.pipeline = "Объем воронки";
ru.ReportsPage.sales.avgDeal = "Средний чек";
ru.ReportsPage.sales.winRate = "Процент успешных сделок";
ru.ReportsPage.sales.cycleLength = "Средний цикл продажи";
ru.ReportsPage.sales.days = "дней";

const charts = ru.ReportsPage.charts = ru.ReportsPage.charts || {};
charts.oppsBySalesStage = "Сделки по этапам продаж";
charts.oppsByMonth = "Сделки по месяцам";
charts.newLeadsByMonth = "Новые лиды по месяцам";
charts.leadSources = "Источники лидов";
charts.conversionRate = "Конверсия лидов в сделки";
charts.newContactsByMonth = "Новые контакты по месяцам";
charts.contactsByAccount = "Контакты по контрагентам";
charts.newAccountsByMonth = "Новые контрагенты по месяцам";
charts.accountsByIndustry = "Контрагенты по отраслям";
charts.topAccountsByRevenue = "Топ контрагенты по выручке";
charts.accountsBySize = "Контрагенты по размеру";
charts.overdueTasks = "Просроченные задачи";
charts.tasksCreatedCompleted = "Созданные и завершенные задачи";
charts.tasksByAssignee = "Задачи по исполнителям";
charts.activitiesByType = "Активности по типам";
charts.emailsSent = "Отправлено email";
charts.openRate = "Процент открытий(Open Rate)";
charts.clickRate = "Процент кликов(Click Rate)";
charts.campaignROI = "Отправки кампаний";
charts.topTemplates = "Лучшие шаблоны";
charts.targetListGrowth = "Рост целевой аудитории";
charts.totalActiveUsers = "Всего активных пользователей";
charts.activeUsersByYear = "Активные пользователи за год";
charts.userGrowth = "Рост пользователей";
charts.usersByRole = "Пользователи по ролям";
charts.oppsByStage = "Сделки по этапам продаж";
charts.newLeads = "Новые лиды по месяцам";
charts.newContacts = "Новые контакты по месяцам";
charts.newAccounts = "Новые контрагенты по месяцам";
charts.byIndustry = "Контрагенты по отраслям";
charts.topByRevenue = "Топ контрагентов по выручке";
charts.bySize = "Контрагенты по размеру";
charts.targetGrowth = "Рост целевой аудитории";
charts.activeByYear = "Активные пользователи за год";
charts.name = "Название";
charts.value = "Значение";

const sd = ru.ReportsPage.saveDialog = ru.ReportsPage.saveDialog || {};
sd.title = "Сохранить конфигурацию отчета";
sd.nameLabel = "Название отчета";
sd.namePlaceholder = "Например, Воронка продаж за Q1";
sd.shareLabel = "Поделиться с командой";
sd.cancel = "Отмена";
sd.save = "Сохранить";

const sched = ru.ReportsPage.scheduleDialog = ru.ReportsPage.scheduleDialog || {};
sched.title = "Запланировать отчет";
sched.savedReport = "Сохраненный отчет";
sched.selectReport = "Выберите сохраненный отчет...";
sched.frequency = "Частота";
sched.daily = "Ежедневно (9:00)";
sched.weeklyMon = "Еженедельно (Пн)";
sched.weeklyFri = "Еженедельно (Пт)";
sched.monthly = "Ежемесячно (1-го числа)";
sched.custom = "Пользовательский формат (cron)";
sched.cronExpression = "Выражение Cron";
sched.recipients = "Получатели";
sched.recipientsPlaceholder = "email1@example.com, email2@example.com";
sched.format = "Формат";
sched.both = "Оба (CSV + PDF)";
sched.cancel = "Отмена";
sched.create = "Создать расписание";

ru.ReportsPage.savedReports = ru.ReportsPage.savedReports || {};
ru.ReportsPage.savedReports.placeholder = "Сохраненные отчеты...";
ru.ReportsPage.savedReports.shared = "общее";

fs.writeFileSync(path, JSON.stringify(ru, null, 2), 'utf8');
console.log('ru.json patched');
