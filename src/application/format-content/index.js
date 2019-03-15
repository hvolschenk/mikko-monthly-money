const { output: { filename, headings } } = require('configuration');
const { getFileExtension } = require('shared/filesystem');
const logger = require('shared/logger');

const formatters = require('./formatters');

module.exports = (content) => {
  const extension = getFileExtension(filename());
  // The next line is disabled as the extension and formatters are within our control
  // eslint-disable-next-line security/detect-object-injection
  let formatter = formatters[extension];
  if (formatter) {
    logger.debug(`Formatting content using the '${extension}' formatter`);
  } else {
    logger.debug('Formatting content using the \'csv\' formatter');
    formatter = formatters.csv;
  }
  return formatter({ content, headings: headings() });
};
