const { output: { filenameExtension } } = require('configuration');

const formatters = require('./formatters');

module.exports = formatters[filenameExtension()] || formatters.csv;
