beforeAll(() => {
  jest.mock('shared/logger');
});

afterAll(() => {
  jest.unmock('shared/logger');
});

describe('When a formatter exists for the extension', () => {
  const FILE_EXTENSION = 'FILE_EXTENSION';
  const FILENAME = 'FILENAME';
  const FORMATTED_VALUE = 'FORMATTED_VALUE';
  const HEADINGS = 'HEADINGS';
  const mockFilename = jest.fn().mockReturnValue(FILENAME);
  const mockFormatter = () => FORMATTED_VALUE;
  const mockFormatters = { [FILE_EXTENSION]: mockFormatter };
  const mockGetFileExtension = jest.fn().mockReturnValue(FILE_EXTENSION);
  const mockHeadings = jest.fn().mockReturnValue(HEADINGS);

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({
      output: { filename: mockFilename, headings: mockHeadings },
    }));
    jest.mock('shared/filesystem', () => ({ getFileExtension: mockGetFileExtension }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index')();
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('shared/filesystem');
    jest.unmock('./formatters');
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(FORMATTED_VALUE);
  });
});

describe('When no formatter exists for the extension', () => {
  const CONTENT = 'CONTENT';
  const FILE_EXTENSION = 'FILE_EXTENSION';
  const FILENAME = 'FILENAME';
  const FORMATTED_VALUE = 'FORMATTED_VALUE';
  const HEADINGS = 'HEADINGS';
  const mockFilename = jest.fn().mockReturnValue(FILENAME);
  const mockFormatter = jest.fn().mockReturnValue(FORMATTED_VALUE);
  const mockFormatters = { csv: mockFormatter };
  const mockGetFileExtension = jest.fn().mockReturnValue(FILE_EXTENSION);
  const mockHeadings = jest.fn().mockReturnValue(HEADINGS);

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({
      output: { filename: mockFilename, headings: mockHeadings },
    }));
    jest.mock('shared/filesystem', () => ({ getFileExtension: mockGetFileExtension }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index')(CONTENT);
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('shared/filesystem');
    jest.unmock('./formatters');
  });

  test('Uses the filename to get the extension', () => {
    expect(mockGetFileExtension.mock.calls[0][0]).toBe(FILENAME);
  });

  test('Invokes the formatter with the correct parameters', () => {
    expect(mockFormatter.mock.calls[0][0]).toEqual({ content: CONTENT, headings: HEADINGS });
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(FORMATTED_VALUE);
  });
});
