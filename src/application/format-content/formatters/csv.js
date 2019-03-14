module.exports = content => content.reduce(
  (accumulator, { month }) => `${accumulator}${month}\n`,
  '',
);
