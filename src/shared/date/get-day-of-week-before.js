module.exports = ({ date, dayOfWeek = 5 }) => {
  const testDate = new Date(date.getTime());
  while (testDate.getDay() !== dayOfWeek) {
    testDate.setDate(testDate.getDate() - 1);
  }
  return testDate;
};
