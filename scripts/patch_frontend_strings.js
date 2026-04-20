const fs = require('fs');
const path = require('path');

const TRANSLATIONS = {
  // Common Data Table & Pagination
  'No results.': 'Нет результатов.',
  '0 of 0 row(s) selected.': 'Выбрано 0 из 0 строк.',
  'rows selected.': 'строк выбрано.',
  'Rows per page': 'Строк на странице',
  'Page 1 of 0': 'Страница 1 из 0',
  'Go to first page': 'На первую страницу',
  'Go to previous page': 'На предыдущую страницу',
  'Go to next page': 'На следующую страницу',
  'Go to last page': 'На последнюю страницу',
  'Date Created': 'Дата создания',
  'Name': 'Название',
  'Description': 'Описание',
  'Visibility': 'Видимость',
  'Status': 'Статус',
  'Date': 'Дата',
  'Type': 'Тип',
  'View': 'Просмотр',

  // Kanban / Leads / Projects Statuses
  'New': 'Новая',
  'Need analysis': 'Требует анализа',
  'Offer sent': 'КП отправлено',
  'Offer accepted': 'КП принято',
  'Contract draft': 'Черновик договора',

  // Dashboards & Overviews
  'In development. After this compoment is finished, there will be a optimistic update of the data.': 'В разработке. После обновления модуль будет работать оптимистично.',
  'Your personal CRM overview': 'Ваша персональная сводка CRM',
  'Total Tasks': 'Всего задач',
  'Open Tasks': 'Открытые задачи',
  'My Leads': 'Мои лиды',
  'Active Opportunities': 'Активные сделки',
  'My Tasks': 'Мои задачи',
  'No tasks assigned.': 'Нет назначенных задач.',
  'My Opportunities': 'Мои сделки',
  'No opportunities assigned.': 'Нет назначенных сделок.',
  'No leads assigned.': 'Нет назначенных лидов.',

  // Modules Specific Headers
  'Manage your product and service catalog': 'Управляйте каталогом товаров и услуг',
  'Product Catalog': 'Каталог товаров',
  'No products found. Create your first product to get started.': 'Товары не найдены. Создайте первый товар, чтобы начать.',
  
  'Your connected mailboxes': 'Ваши подключенные почтовые ящики',
  // handle raw single quotes in strings vs escaped
  "You don't have any mailbox registered yet.": 'У вас пока не подключено ни одного почтового ящика.',
  "You don\\'t have any mailbox registered yet.": 'У вас пока не подключено ни одного почтового ящика.',
  'Go to your profile to set up your first mailbox': 'Перейдите в профиль, чтобы настроить первый ящик',

  'Manage your email campaigns': 'Управляйте вашими email-кампаниями',
  'All Campaigns': 'Все кампании',
  'Filter by name ...': 'Фильтр по названию ...',
  'All Statuses': 'Все статусы',
  'Scheduled At': 'Запланировано на',
  'Recipients': 'Получатели',
  'Template': 'Шаблон',
  'No campaigns found.': 'Кампании не найдены.',
  '+ New Campaign': '+ Новая кампания',

  'Reusable email templates': 'Многоразовые шаблоны',
  'Templates': 'Шаблоны',
  '+ New Template': '+ Новый шаблон',
  'No templates found': 'Шаблоны не найдены',

  'Manage your marketing and sales targets': 'Управление целями маркетинга и продаж',
  'Targets': 'Базы контактов',
  'Import CSV': 'Импорт CSV',
  '+ New Target': '+ Новая база',
  'No targets found': 'Базы контактов не найдены',

  'Manage your target lists for campaigns and outreach': 'Управляйте списками рассылок',
  'Target Lists': 'Списки рассылок',
  '+ New List': '+ Новый список',
  'No target lists found': 'Списки не найдены',

  'Upload Documents': 'Загрузить документы',
  'Content': 'Содержимое',
  'Document': 'Документ',
  'Фильтровать документы...': 'Поиск документов...',
  'Account': 'Компания',

  // User additions
  'My Dashboard': 'Мой дашборд',
  'Campaigns': 'Кампании',
  'Campaign Templates': 'Шаблоны кампаний',
  'No contracts assigned.': 'Нет назначенных договоров.',
  'Welcome to NextCRM': 'Добро пожаловать в NextCRM',
  'Choose your sign-in method': 'Выберите способ входа',
  'Continue with Google': 'Продолжить с Google',
  'Or continue with email': 'Или войти через email',
  'Send verification code': 'Отправить код',
  'Toggle Sidebar': 'Свернуть меню',
  'Feedback': 'Отзыв',
  'Toggle theme': 'Сменить тему',

  // Global search usually passed like placeholder="Search..."
  'placeholder="Search"': 'placeholder="Поиск"',
  'placeholder="Search..."': 'placeholder="Поиск..."',
  'placeholder="Search ... "': 'placeholder="Поиск ..."',
  '"Search..."': '"Поиск..."',
  '"Search"': '"Поиск"',
  '>Search<': '>Поиск<'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
        callback(dirPath);
      }
    }
  });
}

let modifiedCount = 0;

walkDir(path.join(__dirname, '../app'), processFile);
walkDir(path.join(__dirname, '../components'), processFile);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [eng, rus] of Object.entries(TRANSLATIONS)) {
    let esc = escapeRegExp(eng);
    let regexJsx = new RegExp(`>\\s*${esc}\\s*<`, 'g');
    content = content.replace(regexJsx, `>${rus}<`);

    let regexQuotes1 = new RegExp(`'${esc}'`, 'g');
    content = content.replace(regexQuotes1, `'${rus}'`);

    let regexQuotes2 = new RegExp(`"${esc}"`, 'g');
    content = content.replace(regexQuotes2, `"${rus}"`);

    let regexBackticks = new RegExp(`\\\`${esc}\\\``, 'g');
    content = content.replace(regexBackticks, `\`${rus}\``);
    
    if (eng.includes('placeholder=')) {
         content = content.replace(new RegExp(esc, 'g'), rus);
    }
  }

  // Edge cases standard replacements:
  content = content.replace(/"Date Created"/g, '"Дата создания"');
  content = content.replace(/"Name"/g, '"Название"');
  content = content.replace(/>Name</g, '>Название<');
  content = content.replace(/"Description"/g, '"Описание"');
  content = content.replace(/>Description</g, '>Описание<');
  content = content.replace(/"Visibility"/g, '"Видимость"');
  content = content.replace(/>Visibility</g, '>Видимость<');
  content = content.replace(/"Type"/g, '"Тип"');
  content = content.replace(/>Type</g, '>Тип<');
  content = content.replace(/"Status"/g, '"Статус"');
  content = content.replace(/>Status</g, '>Статус<');
  content = content.replace(/"Date"/g, '"Дата"');
  content = content.replace(/>Date</g, '>Дата<');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated: ${filePath}`);
  }
}

console.log(`Finished processing. Modified ${modifiedCount} files.`);
