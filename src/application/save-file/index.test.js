beforeAll(() => {
  jest.mock('shared/logger');
});

afterAll(() => {
  jest.unmock('shared/logger');
});

describe('When the file cannot be written', () => {
  const ERROR = new Error('Cannot write file');
  const FILENAME = 'FILENAME';
  const FULL_FILE_PATH = 'FULL_FILE_PATH';
  const PATH = 'PATH';
  const mockGetFullFilePath = jest.fn().mockReturnValue(FULL_FILE_PATH);
  const mockFilename = jest.fn().mockReturnValue(FILENAME);
  const mockPath = jest.fn().mockReturnValue(PATH);
  const mockWriteFile = jest.fn();

  let promise;
  let result;

  beforeAll(async () => {
    jest.mock('fs', () => ({ writeFile: mockWriteFile }));
    jest.mock('configuration', () => ({ output: { filename: mockFilename, path: mockPath } }));
    jest.mock('./get-full-file-path', () => mockGetFullFilePath);
    jest.resetModules();
    // eslint-disable-next-line global-require
    const saveFile = require('./index');
    promise = saveFile('');
    mockWriteFile.mock.calls[0][2](ERROR);
    try {
      await promise;
    } catch (error) {
      result = error;
    }
  });

  afterAll(() => {
    jest.unmock('fs');
    jest.unmock('configuration');
    jest.unmock('./get-full-file-path');
  });

  test('Rejects the promise with the error', () => {
    expect(result).toBe(ERROR);
  });
});

describe('When the file can be written', () => {
  const FILE_CONTENTS = 'FILE_CONTENTS';
  const FILENAME = 'FILENAME';
  const FULL_FILE_PATH = 'FULL_FILE_PATH';
  const PATH = 'PATH';
  const mockGetFullFilePath = jest.fn().mockReturnValue(FULL_FILE_PATH);
  const mockFilename = jest.fn().mockReturnValue(FILENAME);
  const mockPath = jest.fn().mockReturnValue(PATH);
  const mockWriteFile = jest.fn();

  let mockWriteFileCall;
  let promise;
  let result;

  beforeAll(async () => {
    jest.mock('fs', () => ({ writeFile: mockWriteFile }));
    jest.mock('configuration', () => ({ output: { filename: mockFilename, path: mockPath } }));
    jest.mock('./get-full-file-path', () => mockGetFullFilePath);
    jest.resetModules();
    // eslint-disable-next-line global-require
    const saveFile = require('./index');
    promise = saveFile(FILE_CONTENTS);
    [mockWriteFileCall] = mockWriteFile.mock.calls;
    mockWriteFileCall[2]();
    result = await promise;
  });

  afterAll(() => {
    jest.unmock('fs');
    jest.unmock('configuration');
    jest.unmock('./get-full-file-path');
  });

  test('Builds the full file path with the correct filename and path', () => {
    expect(mockGetFullFilePath.mock.calls[0][0]).toEqual({ filename: FILENAME, path: PATH });
  });

  test('Saves the correct file', () => {
    expect(mockWriteFileCall[0]).toBe(FULL_FILE_PATH);
  });

  test('Saves the correct file contents', () => {
    expect(mockWriteFileCall[1]).toBe(FILE_CONTENTS);
  });

  test('Resolves the promise with the file path that was saved', () => {
    expect(result).toBe(FULL_FILE_PATH);
  });
});
