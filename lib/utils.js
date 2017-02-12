'use strict';
const fs = require('fs');

function readFileAsString (filename, callback) {
  fs.readFile(filename, function (err, buffer) {
    if (err) {
      return callback(err);
    }
    callback(null, buffer.toString());
  });
}

function readFileAsArray (filename, callback) {
  readFileAsString(filename, function (err, contents) {
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
  return array.slice().sort(function (a, b) {
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
  readFileAsString: readFileAsString,
  readFileAsArray: readFileAsArray,
  writeArrayToFile: writeArrayToFile,
  orderBy: orderBy
};
