describe('When the salary date is not on the weekend and not in the past', () => {
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(false);
  const mockIsPastDate = jest.fn().mockReturnValue(false);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
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

describe('When the salary date is not on the weekend but is in the past', () => {
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(false);
  const mockIsPastDate = jest.fn().mockReturnValue(true);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getBonusDate = require('./get-bonus-date');
    result = getBonusDate({});
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Returns an empty string', () => {
    expect(result).toBe('');
  });
});

describe('When the salary date is on the weekend but not in the past', () => {
  const DAY_OF_WEEK_AFTER = 'DAY_OF_WEEK_AFTER';
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetDayOfWeekAfter = jest.fn().mockReturnValue(DAY_OF_WEEK_AFTER);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(true);
  const mockIsPastDate = jest.fn().mockReturnValue(false);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getDayOfWeekAfter: mockGetDayOfWeekAfter,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getBonusDate = require('./get-bonus-date');
    result = getBonusDate({});
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Formats the \'day of the week\'', () => {
    expect(mockFormat.mock.calls[0][0]).toBe(DAY_OF_WEEK_AFTER);
  });

  test('Returns the formatted date', () => {
    expect(result).toBe(FORMATTED_DATE);
  });
});

describe('When the salary date is on the weekend and in the past', () => {
  const DAY_OF_WEEK_AFTER = 'DAY_OF_WEEK_AFTER';
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const SPECIFIC_DAY_OF_MONTH = 'SPECIFIC_DAY_OF_MONTH';
  const MONTH = 'MONTH';
  const YEAR = 'YEAR';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetDayOfWeekAfter = jest.fn().mockReturnValue(DAY_OF_WEEK_AFTER);
  const mockGetSpecificDayOfMonth = jest.fn().mockReturnValue(SPECIFIC_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(true);
  const mockIsPastDate = jest.fn().mockReturnValue(true);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getDayOfWeekAfter: mockGetDayOfWeekAfter,
      getSpecificDayOfMonth: mockGetSpecificDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getBonusDate = require('./get-bonus-date');
    result = getBonusDate({ month: MONTH, year: YEAR });
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Passes the month and year to get the last day of the month', () => {
    expect(mockGetSpecificDayOfMonth.mock.calls[0][0])
      .toEqual({ day: 15, month: MONTH, year: YEAR });
  });

  test('Tests whether the last day of the month is on the weekend', () => {
    expect(mockIsWeekend.mock.calls[0][0]).toBe(SPECIFIC_DAY_OF_MONTH);
  });

  test('Gets the last \'day of the week\' in relation to the last day of the month', () => {
    expect(mockGetDayOfWeekAfter.mock.calls[0][0])
      .toEqual({ date: SPECIFIC_DAY_OF_MONTH, dayOfWeek: 3 });
  });

  test('Tests whether the \'day of the week\' is in the past', () => {
    expect(mockIsPastDate.mock.calls[0][0]).toBe(DAY_OF_WEEK_AFTER);
  });

  test('Returns an empty string', () => {
    expect(result).toBe('');
  });
});
