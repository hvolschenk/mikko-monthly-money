const Stream = require('stream');

const stream = new Stream();
stream.writable = true;
stream.write = ({ msg }) => process.stdout.write(`${msg}\n`);

module.exports = { type: 'raw', stream };
