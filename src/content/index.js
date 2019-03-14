const getRemainingMonths = require('./get-remaining-months');
const parseMonth = require('./parse-month');

module.exports = () => getRemainingMonths().map(parseMonth);
