const { version } = require('../../package.json');

module.exports = ({
  APPLICATION_NAME,
  LOG_LEVEL,
  LOG_PATH,
  OUTPUT_FILENAME,
  OUTPUT_PATH,
}, {
  outputFilename,
}) => {
  const applicationName = () => APPLICATION_NAME;
  const applicationVersion = () => version;
  const logLevel = () => LOG_LEVEL;
  const logPath = fileName => `${LOG_PATH}/${fileName}.log`;
  const filename = () => outputFilename || OUTPUT_FILENAME;
  const outputFilenameExtension = () => {
    const extension = /^.+\.([^.]+)$/.exec(filename());
    return extension == null ? 'csv' : extension[1].toLowerCase();
  };
  const outputPath = () => OUTPUT_PATH;
  return {
    application: { name: applicationName, version: applicationVersion },
    log: { level: logLevel, path: logPath },
    output: { filename, filenameExtension: outputFilenameExtension, path: outputPath },
  };
};
