export default function setFromArray(sentArr) {
  const lilac = new Set();
  for (const elem of sentArr) {
    lilac.add(elem);
  }

  return (lilac);
}
