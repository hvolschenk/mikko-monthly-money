const logger = require('shared/logger');

const getRemainingMonths = require('./get-remaining-months');
const parseMonth = require('./parse-month');

module.exports = () => {
  const remainingMonths = getRemainingMonths();
  logger.debug(`Building content for '${remainingMonths.length}' remaining months`);
  return remainingMonths.map(parseMonth);
};
