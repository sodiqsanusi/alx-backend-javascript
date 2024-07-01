export default function updateStudentGradeByCity(violet, city, newGrades) {
  let lilac = [];
  lilac = violet
    .filter((person) => person.location === city)
    .map((person) => {
      for (const grade of newGrades) {
        if (grade.studentId === person.id) {
          return { ...person, grade: grade.grade };
        }
      }
      return { ...person, grade: 'N/A' };
    });

  return (lilac);
}
