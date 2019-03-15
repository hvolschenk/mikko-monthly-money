const bunyan = require('bunyan');

const { application: { name }, log: { level, path } } = require('configuration');

const minimalStream = require('./streams/minimal');

module.exports = bunyan.createLogger({
  name: name(),
  serializers: { err: bunyan.stdSerializers.err },
  streams: [minimalStream(level()), { level: level(), path: path(name()) }],
});
