const APPLICATION_NAME = 'APPLICATION_NAME';
const LOG_LEVEL = 'LOG_LEVEL';
const LOG_PATH = 'LOG_PATH';
const OUTPUT_FILENAME = 'OUTPUT.FILENAME';
const OUTPUT_HEADINGS = 'OUTPUT_HEADINGS';
const OUTPUT_PATH = 'OUTPUT_PATH';
const logLevel = 'logLevel';
const mockVersion = 'VERSION';
const outputFilename = 'outputFilename';
const outputHeadings = 'true';

let configuration;
let configurationEnvOnly;

beforeAll(() => {
  jest.mock('../../package.json', () => ({ version: mockVersion }));
  // eslint-disable-next-line global-require
  const builder = require('./builder');
  configuration = builder({
    APPLICATION_NAME,
    LOG_LEVEL,
    LOG_PATH,
    OUTPUT_FILENAME,
    OUTPUT_HEADINGS,
    OUTPUT_PATH,
  }, {
    logLevel,
    outputFilename,
    outputHeadings,
  });
  configurationEnvOnly = builder({
    APPLICATION_NAME,
    LOG_LEVEL,
    LOG_PATH,
    OUTPUT_FILENAME,
    OUTPUT_HEADINGS,
    OUTPUT_PATH,
  }, {});
});

afterAll(() => {
  jest.unmock('../../package.json');
});

test('Reads the application name correctly', () => {
  expect(configuration.application.name()).toBe(APPLICATION_NAME);
});

test('Reads the application version number correctly', () => {
  expect(configuration.application.version()).toBe(mockVersion);
});

describe('Reads the log level correctly', () => {
  test('From command-line arguments', () => {
    expect(configuration.log.level()).toBe(logLevel);
  });

  test('From environment variables', () => {
    expect(configurationEnvOnly.log.level()).toBe(LOG_LEVEL);
  });
});

describe('Reads the log path correctly', () => {
  const FILE_NAME = 'FILE_NAME';

  test('Appends the filename to the log', () => {
    expect(configuration.log.path(FILE_NAME)).toBe(`${LOG_PATH}/${FILE_NAME}.log`);
  });
});

describe('Reads the output extension correctly', () => {
  test('With no extension', () => {
    expect(configuration.output.filenameExtension()).toBe('csv');
  });

  test('With an extension', () => {
    expect(configurationEnvOnly.output.filenameExtension()).toBe('filename');
  });
});

describe('Reads the output filename correctly', () => {
  test('From command-line arguments', () => {
    expect(configuration.output.filename()).toBe(outputFilename);
  });

  test('From environment variables', () => {
    expect(configurationEnvOnly.output.filename()).toBe(OUTPUT_FILENAME);
  });
});

describe('Reads the output headings setting correctly', () => {
  test('From command-line arguments', () => {
    expect(configuration.output.headings()).toBe(true);
  });

  test('From environment variables', () => {
    expect(configurationEnvOnly.output.headings()).toBe(false);
  });
});

test('Reads the output path correctly from environment variables', () => {
  expect(configurationEnvOnly.output.path()).toBe(OUTPUT_PATH);
});
