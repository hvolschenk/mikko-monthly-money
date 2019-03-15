const { application: { name, version } } = require('configuration');
const { compose } = require('shared/functional');
const logger = require('shared/logger');

const buildContent = require('./build-content');
const formatContent = require('./format-content');
const saveFile = require('./save-file');

logger.info(`Starting ${name()}@${version()}`);

compose(buildContent, formatContent, saveFile)()
  .then(path => logger.info(`Saved output file to '${path}'`))
  .catch(error => logger.error({ err: error }, 'Error saving file'));
