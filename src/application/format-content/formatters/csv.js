module.exports = content => content.reduce(
  (
    accumulator,
    { bonusDate, month, salaryDate },
  ) => `${accumulator}${month},${salaryDate},${bonusDate}\n`,
  '',
);
