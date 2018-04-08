const XLSX = require('xlsx');
const fs = require('fs');

// Options
const SOURCE_FILE = './data/site.xlsx';
const DEST_FILE = './locales/en/data.json';
const SHEET_NAME = 'site';

console.log('Reading ' + SOURCE_FILE);
const workbook = XLSX.readFile(SOURCE_FILE);
const sheet = workbook.Sheets[SHEET_NAME];
const json = XLSX.utils.sheet_to_json(sheet);

console.log('Writing to a ' + DEST_FILE + '...');
var data = JSON.stringify(json);

// write to a new file
fs.writeFile(DEST_FILE, data, function(err) {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log('Process finished!');
});
