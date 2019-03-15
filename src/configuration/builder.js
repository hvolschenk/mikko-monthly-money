const { version } = require('../../package.json');

module.exports = ({
  APPLICATION_NAME,
  LOG_LEVEL,
  LOG_PATH,
  OUTPUT_FILENAME,
  OUTPUT_HEADINGS,
  OUTPUT_PATH,
}, {
  logLevel,
  outputFilename,
  outputHeadings,
}) => ({
  application: {
    name: () => APPLICATION_NAME,
    version: () => version,
  },
  log: {
    level: () => logLevel || LOG_LEVEL,
    path: fileName => `${LOG_PATH}/${fileName}.log`,
  },
  output: {
    filename: () => outputFilename || OUTPUT_FILENAME,
    headings: () => (outputHeadings || OUTPUT_HEADINGS) === 'true',
    path: () => OUTPUT_PATH,
  },
});
