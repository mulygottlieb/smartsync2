import { TaskRelatedIssueType as TTaskRelatedIssueType } from "../api/taskRelatedIssueType/TaskRelatedIssueType";

export const TASKRELATEDISSUETYPE_TITLE_FIELD = "name";

export const TaskRelatedIssueTypeTitle = (
  record: TTaskRelatedIssueType
): string => {
  return record.name?.toString() || String(record.id);
};
