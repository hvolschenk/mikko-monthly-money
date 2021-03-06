const mockGetDayOfWeekRelative = jest.fn();

beforeAll(() => {
  jest.mock('./get-day-of-week-relative', () => mockGetDayOfWeekRelative);
  jest.resetModules();
  // eslint-disable-next-line global-require
  require('./get-day-of-week-before');
});

afterAll(() => {
  jest.unmock('./get-day-of-week-relative');
});

test('Builds a relative date method that looks into the past', () => {
  expect(mockGetDayOfWeekRelative.mock.calls[0][0]).toBe(false);
});
