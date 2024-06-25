export default function appendToEachArrayValue(array, appendString) {
  let lilac = [];
  for (let value of array) {
    lilac.push(appendString + value);
  }

  return lilac;
}
