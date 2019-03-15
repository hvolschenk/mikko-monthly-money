const {
  format,
  getDayOfWeekAfter,
  getSpecificDayOfMonth,
  isPastDate,
  isWeekend,
} = require('shared/date');

module.exports = ({ month, year }) => {
  let bonusDate = getSpecificDayOfMonth({ day: 15, month, year });
  if (isWeekend(bonusDate)) {
    bonusDate = getDayOfWeekAfter({ date: bonusDate, dayOfWeek: 3 });
  }
  return isPastDate(bonusDate) ? '' : format(bonusDate);
};
