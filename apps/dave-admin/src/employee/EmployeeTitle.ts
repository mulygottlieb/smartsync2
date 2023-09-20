import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "facebookUrl";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.facebookUrl?.toString() || String(record.id);
};
