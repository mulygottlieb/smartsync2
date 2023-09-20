import { TaskEmployee as TTaskEmployee } from "../api/taskEmployee/TaskEmployee";

export const TASKEMPLOYEE_TITLE_FIELD = "id";

export const TaskEmployeeTitle = (record: TTaskEmployee): string => {
  return record.id?.toString() || String(record.id);
};
