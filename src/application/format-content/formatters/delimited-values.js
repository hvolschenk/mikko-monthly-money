module.exports = delimiter => ({ content, headings }) => {
  let formattedData = headings ? `Month${delimiter}Salary date${delimiter}Bonus date\n` : '';
  formattedData += content.reduce(
    (accumulator, { bonusDate, month, salaryDate }) =>
      `${accumulator}${month}${delimiter}${salaryDate}${delimiter}${bonusDate}\n`,
    '',
  );
  return formattedData;
};
