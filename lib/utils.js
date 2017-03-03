const fs = require('fs');

function readFileAsString (filename, callback) {
  fs.readFile(filename, (err, buffer) => {
    if (err) {
      return callback(err);
    }
    callback(null, buffer.toString());
  });
}

function readFileAsArray (filename, callback) {
  readFileAsString(filename, (err, contents) => {
    if (err) {
      return callback(err);
    }
    callback(null, contents.split('\n'));
  });
}

function writeArrayToFile (filename, array, callback) {
  fs.writeFile(filename, array.join('\n'), callback);
}

function orderBy (array, mapper) {
  return array.slice().sort((a, b) => {
    const aPrime = mapper(a);
    const bPrime = mapper(b);
    if (aPrime < bPrime) {
      return -1;
    }
    if (aPrime > bPrime) {
      return 1;
    }
    return 0;
  });
}

module.exports = {
  readFileAsString,
  readFileAsArray,
  writeArrayToFile,
  orderBy,
};
