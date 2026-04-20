const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceDates(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace various YYYY-MM-DD formats with DD.MM.YYYY
  content = content.replace(/YYYY-MM-DD HH:mm:ss/g, 'DD.MM.YYYY HH:mm:ss');
  content = content.replace(/YYYY-MM-DD HH:mm/g, 'DD.MM.YYYY HH:mm');
  content = content.replace(/YYYY-MM-DD-HH:mm/g, 'DD.MM.YYYY HH:mm');
  content = content.replace(/YYYY-MM-DD/g, 'DD.MM.YYYY');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated dates in ${filePath}`);
  }
}

walkDir('d:/MY-LIFE-SYSTEM/nextcrm-app-main/app', replaceDates);
