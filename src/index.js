const { application: { name, version } } = require('configuration');
const logger = require('shared/logger');

logger.info(`Starting ${name()}@${version()}`);
