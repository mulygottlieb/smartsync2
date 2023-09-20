import { TaskVersion as TTaskVersion } from "../api/taskVersion/TaskVersion";

export const TASKVERSION_TITLE_FIELD = "name";

export const TaskVersionTitle = (record: TTaskVersion): string => {
  return record.name?.toString() || String(record.id);
};
