import { TagTask as TTagTask } from "../api/tagTask/TagTask";

export const TAGTASK_TITLE_FIELD = "id";

export const TagTaskTitle = (record: TTagTask): string => {
  return record.id?.toString() || String(record.id);
};
