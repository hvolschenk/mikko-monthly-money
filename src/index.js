const { application: { name, version } } = require('configuration');
const logger = require('shared/logger');

const output = require('./output');

logger.info(`Starting ${name()}@${version()}`);

output('a,b\n')
  .then(path => logger.info(`Saved output file to ${path}`))
  .catch(error => logger.error({ err: error }, 'Error saving file'));
