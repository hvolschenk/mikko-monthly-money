describe('When the salary date is not on the weekend and not in the past', () => {
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const LAST_DAY_OF_MONTH = 'LAST_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetLastDayOfMonth = jest.fn().mockReturnValue(LAST_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(false);
  const mockIsPastDate = jest.fn().mockReturnValue(false);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getLastDayOfMonth: mockGetLastDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getSalaryDate = require('./get-salary-date');
    result = getSalaryDate({});
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
  const LAST_DAY_OF_MONTH = 'LAST_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetLastDayOfMonth = jest.fn().mockReturnValue(LAST_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(false);
  const mockIsPastDate = jest.fn().mockReturnValue(true);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getLastDayOfMonth: mockGetLastDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getSalaryDate = require('./get-salary-date');
    result = getSalaryDate({});
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Returns an empty string', () => {
    expect(result).toBe('');
  });
});

describe('When the salary date is on the weekend but not in the past', () => {
  const DAY_OF_WEEK_BEFORE = 'DAY_OF_WEEK_BEFORE';
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const LAST_DAY_OF_MONTH = 'LAST_DAY_OF_MONTH';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetDayOfWeekBefore = jest.fn().mockReturnValue(DAY_OF_WEEK_BEFORE);
  const mockGetLastDayOfMonth = jest.fn().mockReturnValue(LAST_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(true);
  const mockIsPastDate = jest.fn().mockReturnValue(false);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getDayOfWeekBefore: mockGetDayOfWeekBefore,
      getLastDayOfMonth: mockGetLastDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getSalaryDate = require('./get-salary-date');
    result = getSalaryDate({});
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Formats the \'day of the week\'', () => {
    expect(mockFormat.mock.calls[0][0]).toBe(DAY_OF_WEEK_BEFORE);
  });

  test('Returns the formatted date', () => {
    expect(result).toBe(FORMATTED_DATE);
  });
});

describe('When the salary date is on the weekend and in the past', () => {
  const DAY_OF_WEEK_BEFORE = 'DAY_OF_WEEK_BEFORE';
  const FORMATTED_DATE = 'FORMATTED_DATE';
  const LAST_DAY_OF_MONTH = 'LAST_DAY_OF_MONTH';
  const MONTH = 'MONTH';
  const YEAR = 'YEAR';
  const mockFormat = jest.fn().mockReturnValue(FORMATTED_DATE);
  const mockGetDayOfWeekBefore = jest.fn().mockReturnValue(DAY_OF_WEEK_BEFORE);
  const mockGetLastDayOfMonth = jest.fn().mockReturnValue(LAST_DAY_OF_MONTH);
  const mockIsWeekend = jest.fn().mockReturnValue(true);
  const mockIsPastDate = jest.fn().mockReturnValue(true);

  let result;

  beforeAll(() => {
    jest.mock('shared/date', () => ({
      format: mockFormat,
      getDayOfWeekBefore: mockGetDayOfWeekBefore,
      getLastDayOfMonth: mockGetLastDayOfMonth,
      isWeekend: mockIsWeekend,
      isPastDate: mockIsPastDate,
    }));
    jest.resetModules();
    // eslint-disable-next-line global-require
    const getSalaryDate = require('./get-salary-date');
    result = getSalaryDate({ month: MONTH, year: YEAR });
  });

  afterAll(() => {
    jest.unmock('shared/date');
  });

  test('Passes the month and year to get the last day of the month', () => {
    expect(mockGetLastDayOfMonth.mock.calls[0][0]).toEqual({ month: MONTH, year: YEAR });
  });

  test('Tests whether the last day of the month is on the weekend', () => {
    expect(mockIsWeekend.mock.calls[0][0]).toBe(LAST_DAY_OF_MONTH);
  });

  test('Gets the last \'day of the week\' in relation to the last day of the month', () => {
    expect(mockGetDayOfWeekBefore.mock.calls[0][0]).toEqual({ date: LAST_DAY_OF_MONTH });
  });

  test('Tests whether the \'day of the week\' is in the past', () => {
    expect(mockIsPastDate.mock.calls[0][0]).toBe(DAY_OF_WEEK_BEFORE);
  });

  test('Returns an empty string', () => {
    expect(result).toBe('');
  });
});
