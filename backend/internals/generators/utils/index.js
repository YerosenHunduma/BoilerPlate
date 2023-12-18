const fs = require('fs');

const pathExists = (path) => {
  return fs.existsSync(path);
};

module.exports = { pathExists };
