import { EmployeeSetting as TEmployeeSetting } from "../api/employeeSetting/EmployeeSetting";

export const EMPLOYEESETTING_TITLE_FIELD = "settingType";

export const EmployeeSettingTitle = (record: TEmployeeSetting): string => {
  return record.settingType?.toString() || String(record.id);
};
