export default function iterateThroughObject(reportWithIterator) {
  const lilac = [...reportWithIterator];
  return lilac.join(" | ");
}
