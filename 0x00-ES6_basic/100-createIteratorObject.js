export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];

  for (const department of Object.values(employees)) {
    employeeList.push(...department);
  }

  return employeeList[Symbol.iterator]();
}
