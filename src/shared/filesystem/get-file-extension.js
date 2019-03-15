module.exports = (filename) => {
  const extension = /^.+\.([^.]+)$/.exec(filename);
  return extension === null ? 'csv' : extension[1].toLowerCase();
};
