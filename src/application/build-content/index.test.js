const mockGetRemainingMonths = jest.fn().mockReturnValue([9, 10, 11]);
const mockParseMonth = jest.fn().mockImplementation(value => value + 1);

let result;

beforeAll(() => {
  jest.mock('shared/logger');
  jest.mock('./get-remaining-months', () => mockGetRemainingMonths);
  jest.mock('./parse-month', () => mockParseMonth);
  jest.resetModules();
  // eslint-disable-next-line global-require
  const buildContent = require('./index');
  result = buildContent();
});

afterAll(() => {
  jest.unmock('shared/logger');
  jest.unmock('./get-remaining-months');
  jest.unmock('./parse-month');
});

test('Parses each month individually', () => {
  expect(mockParseMonth.mock.calls.length).toBe(3);
});

test('Returns the parsed list of months', () => {
  expect(result).toEqual([10, 11, 12]);
});
