import { EmployeeJobPreset as TEmployeeJobPreset } from "../api/employeeJobPreset/EmployeeJobPreset";

export const EMPLOYEEJOBPRESET_TITLE_FIELD = "id";

export const EmployeeJobPresetTitle = (record: TEmployeeJobPreset): string => {
  return record.id?.toString() || String(record.id);
};
