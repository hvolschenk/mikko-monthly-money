const isPastDate = require('./is-past-date');

test('Returns \'true\' if the date is in the past', () => {
  expect(isPastDate(new Date(1970, 0, 1))).toBe(true);
});

test('Returns \'false\' if the date is today', () => {
  expect(isPastDate(new Date())).toBe(false);
});

test('Returns \'false\' if the date is in the future', () => {
  expect(isPastDate(new Date(2170, 0, 1))).toBe(false);
});
