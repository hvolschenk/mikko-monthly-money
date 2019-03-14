const MONTH = 1;
const SALARY_DATE = 'SALARY_DATE';
const mockGetSalaryDate = jest.fn().mockReturnValue(SALARY_DATE);

let parseMonth;
let result;

beforeAll(() => {
  jest.mock('./get-salary-date', () => mockGetSalaryDate);
  jest.resetModules();
  // eslint-disable-next-line global-require
  parseMonth = require('./index');
  result = parseMonth(MONTH);
});

afterAll(() => {
  jest.unmock('./get-salary-date');
});

test('Gets the salary date with the correct month and year', () => {
  expect(mockGetSalaryDate.mock.calls[0][0])
    .toEqual({ month: MONTH, year: new Date().getFullYear() });
});

test('Parses the month correctly', () => {
  expect(result).toEqual({ month: 2, salaryDate: SALARY_DATE });
});
