const DAY = 22;
const FORMATTED_MONTH_NAME = 'FORMATTED_MONTH_NAME';
const MONTH = 1;
const YEAR = 2019;
const mockFormatMonthName = jest.fn().mockReturnValue(FORMATTED_MONTH_NAME);

let format;
let result;

beforeAll(() => {
  jest.mock('./format-month-name', () => mockFormatMonthName);
  jest.resetModules();
  // eslint-disable-next-line global-require
  format = require('./format');
  result = format(new Date(YEAR, MONTH, DAY));
});

afterAll(() => {
  jest.unmock('./format-month-name');
});

test('Formats the correct month number into a name', () => {
  expect(mockFormatMonthName.mock.calls[0][0]).toBe(MONTH);
});

test('Formats a date correctly', () => {
  expect(result).toBe(`${DAY} ${FORMATTED_MONTH_NAME} ${YEAR}`);
});
