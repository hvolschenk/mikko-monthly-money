const json = require('./json');

test('Stringifies the content with newlines and spacing', () => {
  expect(json([{ name: 'Kate Lockwell' }, { name: 'Jim Raynor' }]))
    .toBe('[\n  {\n    "name": "Kate Lockwell"\n  },\n  {\n    "name": "Jim Raynor"\n  }\n]\n');
});
