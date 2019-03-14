const format = require('./format');

test('Formats a date correctly', () => {
  expect(format(new Date(2018, 1, 22))).toBe('2018-2-22');
});
