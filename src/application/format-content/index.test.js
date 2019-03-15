beforeAll(() => {
  jest.mock('shared/logger');
});

afterAll(() => {
  jest.unmock('shared/logger');
});

describe('When a formatter exists for the extension', () => {
  const FILENAME_EXTENSION = 'FILENAME_EXTENSION';
  const FORMATTED_VALUE = 'FORMATTED_VALUE';
  const HEADINGS = 'HEADINGS';
  const mockFilenameExtension = jest.fn().mockReturnValue(FILENAME_EXTENSION);
  const mockFormatter = () => FORMATTED_VALUE;
  const mockFormatters = { [FILENAME_EXTENSION]: mockFormatter };
  const mockHeadings = jest.fn().mockReturnValue(HEADINGS);

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({
      output: { filenameExtension: mockFilenameExtension, headings: mockHeadings },
    }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index')();
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('./formatters');
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(FORMATTED_VALUE);
  });
});

describe('When no formatter exists for the extension', () => {
  const CONTENT = 'CONTENT';
  const FILENAME_EXTENSION = 'FILENAME_EXTENSION';
  const FORMATTED_VALUE = 'FORMATTED_VALUE';
  const HEADINGS = 'HEADINGS';
  const mockFilenameExtension = jest.fn().mockReturnValue(FILENAME_EXTENSION);
  const mockFormatter = jest.fn().mockReturnValue(FORMATTED_VALUE);
  const mockFormatters = { csv: mockFormatter };
  const mockHeadings = jest.fn().mockReturnValue(HEADINGS);

  let result;

  beforeAll(() => {
    jest.mock('configuration', () => ({
      output: { filenameExtension: mockFilenameExtension, headings: mockHeadings },
    }));
    jest.mock('./formatters', () => mockFormatters);
    jest.resetModules();
    // eslint-disable-next-line global-require
    result = require('./index')(CONTENT);
  });

  afterAll(() => {
    jest.unmock('configuration');
    jest.unmock('./formatters');
  });

  test('Invokes the formatter with the correct parameters', () => {
    expect(mockFormatter.mock.calls[0][0]).toEqual({ content: CONTENT, headings: HEADINGS });
  });

  test('Returns the correct formatter for the extension', () => {
    expect(result).toBe(FORMATTED_VALUE);
  });
});
