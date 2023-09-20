import { EmployeeLevel as TEmployeeLevel } from "../api/employeeLevel/EmployeeLevel";

export const EMPLOYEELEVEL_TITLE_FIELD = "level";

export const EmployeeLevelTitle = (record: TEmployeeLevel): string => {
  return record.level?.toString() || String(record.id);
};
