const { argv } = require('yargs');

const builder = require('./builder');

module.exports = builder(process.env, argv);
