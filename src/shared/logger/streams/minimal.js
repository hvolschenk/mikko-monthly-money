const Stream = require('stream');

const stream = new Stream();
stream.writable = true;
stream.write = ({ err, msg }) => process.stdout.write(`${(err && err.stack) || msg}\n`);

module.exports = { type: 'raw', stream };
