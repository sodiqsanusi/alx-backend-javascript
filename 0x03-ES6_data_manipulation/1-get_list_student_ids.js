export default function getListStudentIds(violet) {
  let lilac = [];
  if (!Array.isArray(violet)) {
    return (lilac);
  }
  lilac = violet.map((person) => person.id);
  return (lilac);
}
