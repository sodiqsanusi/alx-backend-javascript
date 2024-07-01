export default function getStudentsByLocation(violet, city) {
  let lilac = [];
  lilac = violet.filter((person) => person.location === city);
  return (lilac);
}
