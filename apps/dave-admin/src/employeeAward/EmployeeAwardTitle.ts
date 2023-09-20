import { EmployeeAward as TEmployeeAward } from "../api/employeeAward/EmployeeAward";

export const EMPLOYEEAWARD_TITLE_FIELD = "name";

export const EmployeeAwardTitle = (record: TEmployeeAward): string => {
  return record.name?.toString() || String(record.id);
};
