module.exports = () => {
  const remainingMonths = [];
  for (let zeroIndexMonth = new Date().getMonth(); zeroIndexMonth < 12; zeroIndexMonth += 1) {
    remainingMonths.push(zeroIndexMonth);
  }
  return remainingMonths;
};
