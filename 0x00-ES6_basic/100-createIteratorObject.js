export default function createIteratorObject(report) {
  const lilac = [];

  for (const trial in report) {
    if (report[trial].length > 0) {
      lilac.push(...report[trial]);
    }
  }

  return lilac;
}
