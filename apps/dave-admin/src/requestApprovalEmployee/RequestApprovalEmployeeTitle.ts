import { RequestApprovalEmployee as TRequestApprovalEmployee } from "../api/requestApprovalEmployee/RequestApprovalEmployee";

export const REQUESTAPPROVALEMPLOYEE_TITLE_FIELD = "id";

export const RequestApprovalEmployeeTitle = (
  record: TRequestApprovalEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
