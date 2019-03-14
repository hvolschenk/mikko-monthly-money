const csv = require('./csv');

const MONTH_ONE = 'MONTH_ONE';
const MONTH_TWO = 'MONTH_TWO';
const SALARY_DATE_ONE = 'SALARY_DATE_ONE';
const SALARY_DATE_TWO = 'SALARY_DATE_TWO';

test('Builds \'csv\' output from a list of data', () => {
  expect(csv([
    { month: MONTH_ONE, salaryDate: SALARY_DATE_ONE },
    { month: MONTH_TWO, salaryDate: SALARY_DATE_TWO },
  ])).toBe(`${MONTH_ONE},${SALARY_DATE_ONE}\n${MONTH_TWO},${SALARY_DATE_TWO}\n`);
});
