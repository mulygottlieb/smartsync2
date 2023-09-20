import { EmployeePhone as TEmployeePhone } from "../api/employeePhone/EmployeePhone";

export const EMPLOYEEPHONE_TITLE_FIELD = "typeField";

export const EmployeePhoneTitle = (record: TEmployeePhone): string => {
  return record.typeField?.toString() || String(record.id);
};
