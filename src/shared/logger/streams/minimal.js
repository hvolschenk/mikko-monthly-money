const Stream = require('stream');

const { nameFromLevel } = require('bunyan');

const stream = new Stream();
stream.writable = true;
stream.write = ({ err, level, msg }) => {
  // This next line is disabled as both the map and the index come from bunyan
  // eslint-disable-next-line security/detect-object-injection
  process.stdout.write(`${nameFromLevel[level].toUpperCase()}: `);
  process.stdout.write(`${(err && err.stack) || msg}\n`);
};

module.exports = level => ({ level, stream, type: 'raw' });
