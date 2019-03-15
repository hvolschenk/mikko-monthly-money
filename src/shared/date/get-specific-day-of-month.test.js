const getSpecificDayOfMonth = require('./get-specific-day-of-month');

const DAY = 1;
const MONTH = 1;
const YEAR = 2019;

test('Returns a specific date', () => {
  expect(getSpecificDayOfMonth({ day: DAY, month: MONTH, year: YEAR }))
    .toEqual(new Date(YEAR, MONTH, DAY));
});
