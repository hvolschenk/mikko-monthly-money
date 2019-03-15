const formatMonthName = require('./format-month-name');

test('Formats month \'0\' correctly', () => {
  expect(formatMonthName(0)).toBe('Jan');
});

test('Formats month \'1\' correctly', () => {
  expect(formatMonthName(1)).toBe('Feb');
});

test('Formats month \'2\' correctly', () => {
  expect(formatMonthName(2)).toBe('Mar');
});

test('Formats month \'3\' correctly', () => {
  expect(formatMonthName(3)).toBe('Apr');
});

test('Formats month \'4\' correctly', () => {
  expect(formatMonthName(4)).toBe('May');
});

test('Formats month \'5\' correctly', () => {
  expect(formatMonthName(5)).toBe('Jun');
});

test('Formats month \'6\' correctly', () => {
  expect(formatMonthName(6)).toBe('Jul');
});

test('Formats month \'7\' correctly', () => {
  expect(formatMonthName(7)).toBe('Aug');
});

test('Formats month \'8\' correctly', () => {
  expect(formatMonthName(8)).toBe('Sep');
});

test('Formats month \'9\' correctly', () => {
  expect(formatMonthName(9)).toBe('Oct');
});

test('Formats month \'10\' correctly', () => {
  expect(formatMonthName(10)).toBe('Nov');
});

test('Formats month \'11\' correctly', () => {
  expect(formatMonthName(11)).toBe('Dec');
});
