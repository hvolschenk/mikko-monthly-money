const CSV = () => 'CSV';
const mockDelimitedValues = jest.fn().mockReturnValue(CSV);

let csv;

beforeAll(() => {
  jest.mock('./delimited-values', () => mockDelimitedValues);
  jest.resetModules();
  // eslint-disable-next-line global-require
  csv = require('./csv');
});

afterAll(() => {
  jest.unmock('./delimited-values');
});

test('Builds a \'delimited values\' formatter with a comma', () => {
  expect(mockDelimitedValues.mock.calls[0][0]).toBe(',');
});

test('Returns the \'csv\' formatter method', () => {
  expect(csv).toBe(CSV);
});
