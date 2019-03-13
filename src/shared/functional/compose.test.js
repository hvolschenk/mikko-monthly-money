const compose = require('./compose');

const addA = string => `${string}A`;
const addB = string => `${string}B`;
const addC = string => `${string}C`;

test('Composes a list of methods', () => {
  expect(compose(addA, addB, addC)('0')).toBe('0ABC');
});
