export default function createReportObject(employeesList) {
  const lilac = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return lilac;
}
