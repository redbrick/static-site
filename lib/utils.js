const { readFile, writeFile } = require('fs-extra');

const readFileAsString = filename => readFile(filename).then(buffer => buffer.toString());

module.exports = {
  readFileAsString,
  readFileAsArray: filename => readFileAsString(filename).then(contents => contents.split('\n')),
  writeArrayToFile: (filename, array) => writeFile(filename, array.join('\n')),
  orderBy(array, mapper) {
    return array.sort((a, b) => {
      const aPrime = mapper(a);
      const bPrime = mapper(b);
      if (aPrime < bPrime) {
        return -1;
      } else if (aPrime > bPrime) {
        return 1;
      }
      return 0;
    });
  },
  wrap: fn => (...args) => fn(...args).catch(args[2]),
};
