const { application: { name, version } } = require('configuration');
const { compose } = require('shared/functional');
const logger = require('shared/logger');

const content = require('./content');
const format = require('./format');
const output = require('./output');

logger.info(`Starting ${name()}@${version()}`);

compose(content, format, output)()
  .then(path => logger.info(`Saved output file to ${path}`))
  .catch(error => logger.error({ err: error }, 'Error saving file'));
