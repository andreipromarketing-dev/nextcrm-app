const fs = require('fs');

const en = JSON.parse(fs.readFileSync('d:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/en.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('d:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/ru.json', 'utf8'));

function findUntranslated(enObj, ruObj, prefix = '') {
  let untranslated = [];
  for (let key in enObj) {
    if (typeof enObj[key] === 'object' && enObj[key] !== null) {
      if (typeof ruObj[key] === 'object' && ruObj[key] !== null) {
        untranslated = untranslated.concat(findUntranslated(enObj[key], ruObj[key], `${prefix}${key}.`));
      }
    } else {
      // Check if ruObj[key] is exactly same as enObj[key] and contains letters
      if (ruObj[key] === enObj[key] && /[a-zA-Z]/.test(enObj[key])) {
        untranslated.push(`${prefix}${key}: "${enObj[key]}"`);
      }
    }
  }
  return untranslated;
}

const untr = findUntranslated(en, ru);
console.log('Potentially untranslated keys (exact matches):', untr);
