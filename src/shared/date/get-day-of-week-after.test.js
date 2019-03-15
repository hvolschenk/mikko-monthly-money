const mockGetDayOfWeekRelative = jest.fn();

beforeAll(() => {
  jest.mock('./get-day-of-week-relative', () => mockGetDayOfWeekRelative);
  jest.resetModules();
  // eslint-disable-next-line global-require
  require('./get-day-of-week-after');
});

afterAll(() => {
  jest.unmock('./get-day-of-week-relative');
});

test('Builds a relative date method that looks into the future', () => {
  expect(mockGetDayOfWeekRelative.mock.calls[0][0]).toBe(true);
});
