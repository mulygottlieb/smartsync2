import { TaskSize as TTaskSize } from "../api/taskSize/TaskSize";

export const TASKSIZE_TITLE_FIELD = "name";

export const TaskSizeTitle = (record: TTaskSize): string => {
  return record.name?.toString() || String(record.id);
};
