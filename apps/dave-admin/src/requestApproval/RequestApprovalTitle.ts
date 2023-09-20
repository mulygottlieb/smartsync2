import { RequestApproval as TRequestApproval } from "../api/requestApproval/RequestApproval";

export const REQUESTAPPROVAL_TITLE_FIELD = "name";

export const RequestApprovalTitle = (record: TRequestApproval): string => {
  return record.name?.toString() || String(record.id);
};
