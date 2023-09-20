import { ApprovalPolicy as TApprovalPolicy } from "../api/approvalPolicy/ApprovalPolicy";

export const APPROVALPOLICY_TITLE_FIELD = "name";

export const ApprovalPolicyTitle = (record: TApprovalPolicy): string => {
  return record.name?.toString() || String(record.id);
};
