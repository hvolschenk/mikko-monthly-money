const {
  format,
  getDayOfWeekAfter,
  getSpecificDayOfMonth,
  isWeekend,
} = require('shared/date');

module.exports = ({ month, year }) => {
  let date = getSpecificDayOfMonth({ day: 15, month, year });
  date = isWeekend(date) ? getDayOfWeekAfter({ date, dayOfWeek: 3 }) : date;
  return format(date);
};
