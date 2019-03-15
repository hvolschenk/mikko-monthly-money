const BONUS_DATE = 'BONUS_DATE';
const FORMATTED_MONTH_NAME = 'FORMATTED_MONTH_NAME';
const MONTH = 1;
const SALARY_DATE = 'SALARY_DATE';
const mockFormatMonthName = jest.fn().mockReturnValue(FORMATTED_MONTH_NAME);
const mockGetBonusDate = jest.fn().mockReturnValue(BONUS_DATE);
const mockGetSalaryDate = jest.fn().mockReturnValue(SALARY_DATE);

let parseMonth;
let result;

beforeAll(() => {
  jest.mock('shared/date', () => ({ formatMonthName: mockFormatMonthName }));
  jest.mock('./get-bonus-date', () => mockGetBonusDate);
  jest.mock('./get-salary-date', () => mockGetSalaryDate);
  jest.resetModules();
  // eslint-disable-next-line global-require
  parseMonth = require('./index');
  result = parseMonth(MONTH);
});

afterAll(() => {
  jest.unmock('./get-bonus-date');
  jest.unmock('./get-salary-date');
});

test('Gets the bonus date with the correct month and year', () => {
  expect(mockGetBonusDate.mock.calls[0][0])
    .toEqual({ month: MONTH, year: new Date().getFullYear() });
});

test('Gets the month name with the correct month number', () => {
  expect(mockFormatMonthName.mock.calls[0][0]).toBe(MONTH);
});

test('Gets the salary date with the correct month and year', () => {
  expect(mockGetSalaryDate.mock.calls[0][0])
    .toEqual({ month: MONTH, year: new Date().getFullYear() });
});

test('Parses the month correctly', () => {
  expect(result)
    .toEqual({ bonusDate: BONUS_DATE, month: FORMATTED_MONTH_NAME, salaryDate: SALARY_DATE });
});
