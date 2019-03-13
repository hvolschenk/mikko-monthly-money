const FILENAME = 'FILENAME';
const PATH = 'PATH';
const SANITIZED_FILENAME = 'SANITIZED_FILENAME';
const mockSanitizeFilename = jest.fn().mockReturnValue(SANITIZED_FILENAME);

let result;

beforeAll(() => {
  jest.mock('sanitize-filename', () => mockSanitizeFilename);
  jest.resetModules();
  // eslint-disable-next-line global-require
  const getFullFilePath = require('./get-full-file-path');
  result = getFullFilePath({ filename: FILENAME, path: PATH });
});

afterAll(() => {
  jest.unmock('sanitize-filename');
});

test('Sanitizes the filename', () => {
  expect(mockSanitizeFilename.mock.calls[0][0]).toBe(FILENAME);
});

test('Returns the full file path', () => {
  expect(result).toBe(`${PATH}/${SANITIZED_FILENAME}`);
});
