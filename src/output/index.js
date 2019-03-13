const fs = require('fs');

const { output: { filename, path } } = require('configuration');

const getFullFilePath = require('./get-full-file-path');

const output = fileContents => new Promise((resolve, reject) => {
  const fullPath = getFullFilePath({ filename: filename(), path: path() });
  // This next line is potentially dangerous as the file path is determined from user input,
  // however, the warning is ignored as the filename is sanitized
  // and the directory itself is also out of user control.
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFile(fullPath, fileContents, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve(fullPath);
    }
  });
});

module.exports = output;
