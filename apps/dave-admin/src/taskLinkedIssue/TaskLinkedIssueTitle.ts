import { TaskLinkedIssue as TTaskLinkedIssue } from "../api/taskLinkedIssue/TaskLinkedIssue";

export const TASKLINKEDISSUE_TITLE_FIELD = "id";

export const TaskLinkedIssueTitle = (record: TTaskLinkedIssue): string => {
  return record.id?.toString() || String(record.id);
};
