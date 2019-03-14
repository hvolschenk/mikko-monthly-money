const getSalaryDate = require('./get-salary-date');

module.exports = month => ({
  month: month + 1,
  salaryDate: getSalaryDate({ month, year: new Date().getFullYear() }),
});
