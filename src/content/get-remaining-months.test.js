const getRemainingMonths = require('./get-remaining-months');

const mockGetMonth = jest.fn().mockReturnValue(5);

let originalDate;

beforeAll(() => {
  originalDate = global.Date;
  global.Date = jest.fn().mockImplementation(() => ({ getMonth: mockGetMonth }));
});

afterAll(() => {
  global.Date = originalDate;
});

test('Returns an array of remaining months numbers (zero indexed)', () => {
  expect(getRemainingMonths()).toEqual([5, 6, 7, 8, 9, 10, 11]);
});
