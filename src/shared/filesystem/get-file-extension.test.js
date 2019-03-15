const getFileExtension = require('./get-file-extension');

describe('Returns the file extension correctly', () => {
  test('Returns \'csv\' with no extension', () => {
    expect(getFileExtension('no-extension')).toBe('csv');
  });

  test('Returns \'csv\' with no filename', () => {
    expect(getFileExtension()).toBe('csv');
  });

  test('Returns the actual extension', () => {
    expect(getFileExtension('filename.json')).toBe('json');
  });
});
