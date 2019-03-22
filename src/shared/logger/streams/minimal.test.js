const LEVEL = 'LEVEL';
const LEVEL_NAME = 'LEVEL_NAME';
const mockNameFromLevel = { [LEVEL]: LEVEL_NAME };
const mockWrite = jest.fn();

let originalWrite;
let result;

beforeAll(() => {
  originalWrite = process.stdout.write;
  jest.mock('bunyan', () => ({ nameFromLevel: mockNameFromLevel }));
  jest.resetModules();
  process.stdout.write = mockWrite;
  // eslint-disable-next-line global-require
  const minimal = require('./minimal');
  result = minimal(LEVEL);
});

afterAll(() => {
  jest.unmock('bunyan');
  process.stdout.write = originalWrite;
});

describe('With an error', () => {
  const ERROR = new Error('Failed to do something cool');

  beforeAll(() => {
    result.stream.write({ err: ERROR, level: LEVEL });
  });

  test('Writes out the log level', () => {
    expect(mockWrite.mock.calls[0][0]).toBe(`${LEVEL_NAME}: `);
  });

  test('Writes out the error stack', () => {
    expect(mockWrite.mock.calls[1][0]).toBe(`${ERROR.stack}\n`);
  });
});

describe('With success', () => {
  const MESSAGE = 'MESSAGE';

  beforeAll(() => {
    result.stream.write({ level: LEVEL, msg: MESSAGE });
  });

  test('Writes out the log level', () => {
    expect(mockWrite.mock.calls[2][0]).toBe(`${LEVEL_NAME}: `);
  });

  test('Writes out the log message', () => {
    expect(mockWrite.mock.calls[3][0]).toBe(`${MESSAGE}\n`);
  });
});
