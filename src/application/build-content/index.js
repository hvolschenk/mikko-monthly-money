const { getRemainingMonthsOfYear } = require('shared/date');
const logger = require('shared/logger');

const parseMonth = require('./parse-month');

module.exports = () => {
  const remainingMonths = getRemainingMonthsOfYear();
  logger.debug(`Building content for '${remainingMonths.length}' remaining months`);
  return remainingMonths.map(parseMonth);
};
