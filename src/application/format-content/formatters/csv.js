module.exports = ({ content, headings }) => {
  let formattedData = headings ? 'Month,Salary date,Bonus date\n' : '';
  formattedData += content.reduce(
    (
      accumulator,
      { bonusDate, month, salaryDate },
    ) => `${accumulator}${month},${salaryDate},${bonusDate}\n`,
    '',
  );
  return formattedData;
};
