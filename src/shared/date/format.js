const formatMonthName = require('./format-month-name');

module.exports = date =>
  `${date.getDate()} ${formatMonthName(date.getMonth())} ${date.getFullYear()}`;
