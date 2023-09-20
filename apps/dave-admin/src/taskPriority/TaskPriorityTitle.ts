import { TaskPriority as TTaskPriority } from "../api/taskPriority/TaskPriority";

export const TASKPRIORITY_TITLE_FIELD = "name";

export const TaskPriorityTitle = (record: TTaskPriority): string => {
  return record.name?.toString() || String(record.id);
};
