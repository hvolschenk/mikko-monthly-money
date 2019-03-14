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
    salaryDate = getDayOfWeekBefore({ date: salaryDate });
  }
  return isPastDate(salaryDate) ? '' : format(salaryDate);
};
