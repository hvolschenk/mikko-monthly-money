const sanitizeFilename = require('sanitize-filename');

module.exports = ({ filename, path }) => `${path}/${sanitizeFilename(filename)}`;
