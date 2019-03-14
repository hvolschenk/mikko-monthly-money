module.exports = content => content.reduce(
  (accumulator, { month, salaryDate }) => `${accumulator}${month},${salaryDate}\n`,
  '',
);
