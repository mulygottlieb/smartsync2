import { IssueType as TIssueType } from "../api/issueType/IssueType";

export const ISSUETYPE_TITLE_FIELD = "name";

export const IssueTypeTitle = (record: TIssueType): string => {
  return record.name?.toString() || String(record.id);
};
