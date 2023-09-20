import { TagRequestApproval as TTagRequestApproval } from "../api/tagRequestApproval/TagRequestApproval";

export const TAGREQUESTAPPROVAL_TITLE_FIELD = "id";

export const TagRequestApprovalTitle = (
  record: TTagRequestApproval
): string => {
  return record.id?.toString() || String(record.id);
};
