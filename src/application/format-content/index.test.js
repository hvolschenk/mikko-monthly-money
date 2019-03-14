describe('When a formatter exists for the extension', () => {
  const FILENAME_EXTENSION = 'FILENAME_EXTENSION';
  const mockFilenameExtension = jest.fn().mockReturnValue(FILENAME_EXTENSION);
  const mockFormatter = () => 'FORMATTER';
  const mockFormatters = { [FILENAME_EXTENSION]: mockFormatter };

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({ output: { filenameExtension: mockFilenameExtension } }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index');
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('./formatters');
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(mockFormatter);
  });
});

describe('When no formatter exists for the extension', () => {
  const FILENAME_EXTENSION = 'FILENAME_EXTENSION';
  const mockFilenameExtension = jest.fn().mockReturnValue(FILENAME_EXTENSION);
  const mockFormatter = () => 'FORMATTER';
  const mockFormatters = { csv: mockFormatter };

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({ output: { filenameExtension: mockFilenameExtension } }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index');
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('./formatters');
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(mockFormatter);
  });
});
