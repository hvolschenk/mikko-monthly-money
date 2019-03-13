const { version } = require('../../package.json');

module.exports = ({
  APPLICATION_NAME,
  LOG_LEVEL,
  LOG_PATH,
  OUTPUT_FILENAME,
  OUTPUT_PATH,
}, {
  outputFilename,
}) => ({
  application: {
    name: () => APPLICATION_NAME,
    version: () => version,
  },
  log: {
    level: () => LOG_LEVEL,
    path: fileName => `${LOG_PATH}/${fileName}.log`,
  },
  output: {
    filename: () => outputFilename || OUTPUT_FILENAME,
    path: () => OUTPUT_PATH,
  },
});
