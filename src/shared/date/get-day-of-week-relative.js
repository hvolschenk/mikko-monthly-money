module.exports = future => ({ date, dayOfWeek }) => {
  const testDate = new Date(date.getTime());
  while (testDate.getDay() !== dayOfWeek) {
    testDate.setDate(future ? testDate.getDate() + 1 : testDate.getDate() - 1);
  }
  return testDate;
};
