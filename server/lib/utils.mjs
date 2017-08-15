import fs from 'fs-extra';

export async function readFileAsString(filename) {
  try {
    const buffer = await fs.readFile(filename);
    return buffer.toString();
  } catch (err) {
    throw new Error(`Unable to read file: ${filename}\n error: ${err}`);
  }
}

export async function readFileAsArray(filename) {
  try {
    const contents = await readFileAsString(filename);
    return contents.split('\n');
  } catch (err) {
    throw err;
  }
}

export function writeArrayToFile(filename, array) {
  return fs.outputFile(filename, array.join('\n'));
}

export function orderBy(array, mapper) {
  return array.slice().sort((a, b) => {
    const aPrime = mapper(a);
    const bPrime = mapper(b);
    if (aPrime < bPrime) return -1;
    if (aPrime > bPrime) return 1;
    return 0;
  });
}

export default {
  readFileAsString,
  readFileAsArray,
  writeArrayToFile,
  orderBy,
};
