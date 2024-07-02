export default function hasValuesFromArray(iSet, iArr) {
  for (const elem of iArr) {
    if (!iSet.has(elem)) {
      return (false);
    }
  }
  return (true);
}
