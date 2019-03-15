const {
  format,
  getDayOfWeekBefore,
  getLastDayOfMonth,
  isPastDate,
  isWeekend,
} = require('shared/date');

module.exports = ({ month, year }) => {
  let salaryDate = getLastDayOfMonth({ month, year });
  if (isWeekend(salaryDate)) {
    salaryDate = getDayOfWeekBefore({ date: salaryDate, dayOfWeek: 5 });
  }
  return isPastDate(salaryDate) ? '' : format(salaryDate);
};
