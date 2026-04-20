const fs = require('fs');

const en = JSON.parse(fs.readFileSync('d:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/en.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('d:/MY-LIFE-SYSTEM/nextcrm-app-main/locales/ru.json', 'utf8'));

function findMissing(obj1, obj2, prefix = '') {
  let missing = [];
  for (let key in obj1) {
    if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      if (typeof obj2[key] !== 'object' || obj2[key] === null) {
        missing.push(`${prefix}${key} (missing object)`);
      } else {
        missing = missing.concat(findMissing(obj1[key], obj2[key], `${prefix}${key}.`));
      }
    } else {
      if (typeof obj2[key] === 'undefined') {
        missing.push(`${prefix}${key}`);
      } else if (obj1[key] === obj2[key]) {
        // Also missing if exactly the same (perhaps not translated, though some words might be the same, 
        // but for a whole phrase it's a lack of translation).
        // Let's not flag exact matches initially unless needed.
      }
    }
  }
  return missing;
}

const missing = findMissing(en, ru);
console.log('Missing keys:', missing);
