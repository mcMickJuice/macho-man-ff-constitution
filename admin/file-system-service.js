const fs = require('fs');

module.exports.getJsonFromFile = filePath => {
  return new Promise(resolve => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const fileJson = JSON.parse(fileContents);
    resolve(fileJson);
  });
};
