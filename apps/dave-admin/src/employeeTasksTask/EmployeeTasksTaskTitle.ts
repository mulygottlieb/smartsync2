import { EmployeeTasksTask as TEmployeeTasksTask } from "../api/employeeTasksTask/EmployeeTasksTask";

export const EMPLOYEETASKSTASK_TITLE_FIELD = "id";

export const EmployeeTasksTaskTitle = (record: TEmployeeTasksTask): string => {
  return record.id?.toString() || String(record.id);
};
