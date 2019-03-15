const getDayOfWeekRelative = require('./get-day-of-week-relative');

describe('With dates in the future', () => {
  const DATE = new Date(2019, 2, 10);
  const getDayOfWeekAfter = getDayOfWeekRelative(true);

  test('Gets the Monday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 1 })).toEqual(new Date(2019, 2, 11));
  });

  test('Gets the Tuesday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 2 })).toEqual(new Date(2019, 2, 12));
  });

  test('Gets the Wednesday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 3 })).toEqual(new Date(2019, 2, 13));
  });

  test('Gets the Thursday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 4 })).toEqual(new Date(2019, 2, 14));
  });

  test('Gets the Friday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 5 })).toEqual(new Date(2019, 2, 15));
  });

  test('Gets the Saturday after', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 6 })).toEqual(new Date(2019, 2, 16));
  });

  test('Gets the same day if the day of week is the same', () => {
    expect(getDayOfWeekAfter({ date: DATE, dayOfWeek: 0 })).toEqual(DATE);
  });
});

describe('With dates in the past', () => {
  const DATE = new Date(2019, 2, 17);
  const getDayOfWeekBefore = getDayOfWeekRelative(false);

  test('Gets the Monday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 1 })).toEqual(new Date(2019, 2, 11));
  });

  test('Gets the Tuesday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 2 })).toEqual(new Date(2019, 2, 12));
  });

  test('Gets the Wednesday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 3 })).toEqual(new Date(2019, 2, 13));
  });

  test('Gets the Thursday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 4 })).toEqual(new Date(2019, 2, 14));
  });

  test('Gets the Friday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 5 })).toEqual(new Date(2019, 2, 15));
  });

  test('Gets the Saturday before', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 6 })).toEqual(new Date(2019, 2, 16));
  });

  test('Gets the same day if the day of week is the same', () => {
    expect(getDayOfWeekBefore({ date: DATE, dayOfWeek: 0 })).toEqual(DATE);
  });
});
