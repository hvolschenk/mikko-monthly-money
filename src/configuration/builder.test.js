const APPLICATION_NAME = 'APPLICATION_NAME';
const LOG_LEVEL = 'LOG_LEVEL';
const LOG_PATH = 'LOG_PATH';
const mockVersion = 'VERSION';

let configuration;

beforeAll(() => {
  jest.mock('../../package.json', () => ({ version: mockVersion }));
  // eslint-disable-next-line global-require
  const builder = require('./builder');
  configuration = builder({
    APPLICATION_NAME,
    LOG_LEVEL,
    LOG_PATH,
  });
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

test('Reads the log level correctly', () => {
  expect(configuration.log.level()).toBe(LOG_LEVEL);
});

describe('Reads the log path correctly', () => {
  const FILE_NAME = 'FILE_NAME';

  test('Appends the filename to the log', () => {
    expect(configuration.log.path(FILE_NAME)).toBe(`${LOG_PATH}/${FILE_NAME}.log`);
  });
});
