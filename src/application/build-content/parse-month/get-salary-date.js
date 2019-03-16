const {
  format,
  getDayOfWeekBefore,
  getLastDayOfMonth,
  isWeekend,
} = require('shared/date');

module.exports = ({ month, year }) => {
  let date = getLastDayOfMonth({ month, year });
  date = isWeekend(date) ? getDayOfWeekBefore({ date, dayOfWeek: 5 }) : date;
  return format(date);
};
