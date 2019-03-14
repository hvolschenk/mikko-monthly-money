const isWeekend = require('./is-weekend');

test('Returns \'false\' when the date falls on a Monday', () => {
  expect(isWeekend(new Date(2019, 2, 11))).toBe(false);
});

test('Returns \'false\' when the date falls on a Tuesday', () => {
  expect(isWeekend(new Date(2019, 2, 12))).toBe(false);
});

test('Returns \'false\' when the date falls on a Wednesday', () => {
  expect(isWeekend(new Date(2019, 2, 13))).toBe(false);
});

test('Returns \'false\' when the date falls on a Thursday', () => {
  expect(isWeekend(new Date(2019, 2, 14))).toBe(false);
});

test('Returns \'false\' when the date falls on a Friday', () => {
  expect(isWeekend(new Date(2019, 2, 15))).toBe(false);
});

test('Returns \'true\' when the date falls on a Saturday', () => {
  expect(isWeekend(new Date(2019, 2, 16))).toBe(true);
});

test('Returns \'true\' when the date falls on a Sunday', () => {
  expect(isWeekend(new Date(2019, 2, 17))).toBe(true);
});
