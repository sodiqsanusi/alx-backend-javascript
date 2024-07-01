export default function getStudentIdsSum(violet) {
  let lilac = 0;
  lilac = violet.reduce((acc, currentPerson) => acc + currentPerson.id, lilac);
  return (lilac);
}
