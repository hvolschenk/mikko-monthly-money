const { formatMonthName } = require('shared/date');

const getBonusDate = require('./get-bonus-date');
const getSalaryDate = require('./get-salary-date');

module.exports = (month) => {
  const year = new Date().getFullYear();
  return {
    bonusDate: getBonusDate({ month, year }),
    month: formatMonthName(month),
    salaryDate: getSalaryDate({ month, year }),
  };
};
