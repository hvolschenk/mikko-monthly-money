const PSV = () => 'PSV';
const mockDelimitedValues = jest.fn().mockReturnValue(PSV);

let psv;

beforeAll(() => {
  jest.mock('./delimited-values', () => mockDelimitedValues);
  jest.resetModules();
  // eslint-disable-next-line global-require
  psv = require('./psv');
});

afterAll(() => {
  jest.unmock('./delimited-values');
});

test('Builds a \'delimited values\' formatter with a pipe', () => {
  expect(mockDelimitedValues.mock.calls[0][0]).toBe('|');
});

test('Returns the \'psv\' formatter method', () => {
  expect(psv).toBe(PSV);
});
