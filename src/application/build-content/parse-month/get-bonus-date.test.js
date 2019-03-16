describe('When the salary date is not on the weekend', () => {
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(false);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getBonusDate = require('./get-bonus-date');
    result = getBonusDate({});
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Returns the formatted date', () => {
    expect(result).toBe(FORMATTED_DATE);
  });
});

describe('When the salary date is on the weekend', () => {
  const DAY_OF_WEEK_AFTER = 'DAY_OF_WEEK_AFTER';
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const MONTH = 'MONTH';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const YEAR = 'YEAR';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetDayOfWeekAfter = jest.fn().mockReturnValue(DAY_OF_WEEK_AFTER);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(true);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getDayOfWeekAfter: mockGetDayOfWeekAfter,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getBonusDate = require('./get-bonus-date');
    result = getBonusDate({ month: MONTH, year: YEAR });
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Gets the 15th of the month', () => {
    expect(mockGetSpecificDayOfMonth.mock.calls[0][0])
      .toEqual({ day: 15, month: MONTH, year: YEAR });
  });

  test('Gets the correct day after the weekend', () => {
    expect(mockGetDayOfWeekAfter.mock.calls[0][0])
      .toEqual({ date: SPECIFIC_DAY_OF_MONTH, dayOfWeek: 3 });
  });

  test('Formats the \'day of the week\'', () => {
    expect(mockFormat.mock.calls[0][0]).toBe(DAY_OF_WEEK_AFTER);
  });

  test('Returns the formatted date', () => {
    expect(result).toBe(FORMATTED_DATE);
  });
});
