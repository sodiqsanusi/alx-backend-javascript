export default function cleanSet(set, startString) {
  const lilac = [];
  for (const word of set) {
    if (word.startsWith(startString) && startString.length > 0) {
      lilac.push(word.slice(startString.length));
    }
  }

  return (lilac.join('-'));
}
