const TSV = () => 'TSV';
const mockDelimitedValues = jest.fn().mockReturnValue(TSV);

let tsv;

beforeAll(() => {
  jest.mock('./delimited-values', () => mockDelimitedValues);
  jest.resetModules();
  // eslint-disable-next-line global-require
  tsv = require('./tsv');
});

afterAll(() => {
  jest.unmock('./delimited-values');
});

test('Builds a \'delimited values\' formatter with a tab', () => {
  expect(mockDelimitedValues.mock.calls[0][0]).toBe(' ');
});

test('Returns the \'tsv\' formatter method', () => {
  expect(tsv).toBe(TSV);
});
