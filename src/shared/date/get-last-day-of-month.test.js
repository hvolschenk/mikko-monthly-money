const getLastDayOfMonth = require('./get-last-day-of-month');

test('Gets the last day of a February in a leap-year', () => {
  expect(getLastDayOfMonth({ month: 1, year: 2016 })).toEqual(new Date(2016, 1, 29));
});

test('Gets the last day of a February in a non-leap-year', () => {
  expect(getLastDayOfMonth({ month: 1, year: 2015 })).toEqual(new Date(2015, 1, 28));
});

test('Gets the last day of a 31 day month', () => {
  expect(getLastDayOfMonth({ month: 11, year: 2015 })).toEqual(new Date(2015, 11, 31));
});

test('Gets the last day of a 30 day month', () => {
  expect(getLastDayOfMonth({ month: 3, year: 2015 })).toEqual(new Date(2015, 3, 30));
});
