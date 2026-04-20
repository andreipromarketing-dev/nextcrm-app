const fs = require('fs');
const path = require('path');

const dictionary = {
  // Toasts
  '"Success"': '"Успешно"',
  '"Error"': '"Ошибка"',
  '"Something went wrong"': '"Что-то пошло не так"',
  '"Document was assigned to task"': '"Документ прикреплен к задаче"',
  '"Something went wrong, while assigning document to task"': '"Ошибка при прикреплении документа к задаче"',
  '"Document was disconnected from task"': '"Документ откреплен от задачи"',
  '"Something went wrong, while disconnecting document from task"': '"Ошибка при откреплении документа"',
  '"Success!"': '"Успешно!"',
  '"Task status updated successfully"': '"Статус задачи обновлен"',
  '"Something went wrong while sending comment to the DB"': '"Ошибка при сохранении комментария"',
  
  // Statuses & Priorities (common data objects)
  'label: "Bug"': 'label: "Баг"',
  'label: "Feature"': 'label: "Функция"',
  'label: "Documentation"': 'label: "Документация"',
  'label: "Active"': 'label: "В работе"',
  'label: "Pending"': 'label: "Ожидает"',
  'label: "Complete"': 'label: "Завершено"',
  'label: "Open"': 'label: "Открыто"',
  'label: "In Progress"': 'label: "В процессе"',
  'label: "Done"': 'label: "Готово"',
  'label: "Low"': 'label: "Низкий"',
  'label: "Normal"': 'label: "Средний"',
  'label: "High"': 'label: "Высокий"',
  'label: "Critical"': 'label: "Критичный"',
  '"ACTIVE"': '"ACTIVE"', // leave data keys unchanged if possible, but we don't know context. Better wait - let's skip uppercase constants.

  // UI labels
  '"Mark as done"': '"Отметить как выполненное"',
  '>Add<': '>Добавить<',
  '"Cancel"': '"Отмена"',
  '"Save"': '"Сохранить"',
  '"Edit"': '"Редактировать"',
  '"Delete"': '"Удалить"',
  'title="Assigned to"': 'title="Назначено на"',
  'title="Document name"': 'title="Имя документа"',
  'title="Status"': 'title="Статус"',
  'title="Priority"': 'title="Приоритет"',
  '"Unassigned"': '"Не назначено"',
  '"Unknown"': '"Неизвестно"',
  'placeholder="Your comment ..."': 'placeholder="Ваш комментарий..."',
  'placeholder="Document name ..."': 'placeholder="Название документа..."',
  '"Not assigned"': '"Не назначено"'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function translateFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [eng, rus] of Object.entries(dictionary)) {
    // Escape string for global replace
    const regex = new RegExp(eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, rus);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Translated strings in ${filePath}`);
  }
}

walkDir('d:/MY-LIFE-SYSTEM/nextcrm-app-main/app', translateFile);
walkDir('d:/MY-LIFE-SYSTEM/nextcrm-app-main/components', translateFile);
