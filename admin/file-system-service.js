const fs = require('fs');

const getJsonFromFile = filePath => {
  return new Promise(resolve => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const fileJson = JSON.parse(fileContents);
    resolve(fileJson);
  });
};

module.exports.getJsonFromFile = getJsonFromFile;

module.exports.updateJsonFileContents = (filePath, updateFunc) => {
  return getJsonFromFile(filePath).then(json => {
    const updatedJson = updateFunc(json);
    fs.writeFileSync(filePath, JSON.stringify(updatedJson, null, 2));
  });
};
