const csv = require('./csv');

const BONUS_DATE_ONE = 'BONUS_DATE_ONE';
const BONUS_DATE_TWO = 'BONUS_DATE_TWO';
const MONTH_ONE = 'MONTH_ONE';
const MONTH_TWO = 'MONTH_TWO';
const SALARY_DATE_ONE = 'SALARY_DATE_ONE';
const SALARY_DATE_TWO = 'SALARY_DATE_TWO';

test('Builds \'csv\' output from a list of data', () => {
  expect(csv([
    { bonusDate: BONUS_DATE_ONE, month: MONTH_ONE, salaryDate: SALARY_DATE_ONE },
    { bonusDate: BONUS_DATE_TWO, month: MONTH_TWO, salaryDate: SALARY_DATE_TWO },
  ])).toBe(
    `${MONTH_ONE},${SALARY_DATE_ONE},${BONUS_DATE_ONE}\n`
    + `${MONTH_TWO},${SALARY_DATE_TWO},${BONUS_DATE_TWO}\n`,
  );
});
