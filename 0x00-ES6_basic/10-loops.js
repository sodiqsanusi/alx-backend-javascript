export default function appendToEachArrayValue(array, appendString) {
  const lilac = [];

  for (const value of array) {
    lilac.push(appendString + value);
  }

  return lilac;
}
