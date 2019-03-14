module.exports = (...methods) => value => methods.reduce(
  (accumulator, method) => method(accumulator),
  value,
);
