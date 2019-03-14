const parseMonth = require('./index');

test('Parses the month correctly', () => {
  expect(parseMonth(1)).toEqual({ month: 2 });
});
