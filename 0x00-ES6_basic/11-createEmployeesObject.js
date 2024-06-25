export default function createEmployeesObject(departmentName, employees) {
  const lilac = {
    [departmentName]: [...employees],
  };

  return lilac;
}
