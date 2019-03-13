const csv = require('./csv');

const MONTH_ONE = 'MONTH_ONE';
const MONTH_TWO = 'MONTH_TWO';

test('Builds \'csv\' output from a list of data', () => {
  expect(csv([{ month: MONTH_ONE }, { month: MONTH_TWO }])).toBe(`${MONTH_ONE}\n${MONTH_TWO}\n`);
});
