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
}) => {
  const applicationName = () => APPLICATION_NAME;
  const applicationVersion = () => version;
  const logLevelConfiguration = () => logLevel || LOG_LEVEL;
  const logPath = fileName => `${LOG_PATH}/${fileName}.log`;
  const outputFilenameConfiguration = () => outputFilename || OUTPUT_FILENAME;
  const outputFilenameExtension = () => {
    const extension = /^.+\.([^.]+)$/.exec(outputFilenameConfiguration());
    return extension == null ? 'csv' : extension[1].toLowerCase();
  };
  const outputHeadingsConfiguration = () => (outputHeadings || OUTPUT_HEADINGS) === 'true';
  const outputPath = () => OUTPUT_PATH;
  return {
    application: { name: applicationName, version: applicationVersion },
    log: { level: logLevelConfiguration, path: logPath },
    output: {
      filename: outputFilenameConfiguration,
      filenameExtension: outputFilenameExtension,
      headings: outputHeadingsConfiguration,
      path: outputPath,
    },
  };
};
