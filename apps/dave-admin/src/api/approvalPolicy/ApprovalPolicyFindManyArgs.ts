import { ApprovalPolicyWhereInput } from "./ApprovalPolicyWhereInput";
import { ApprovalPolicyOrderByInput } from "./ApprovalPolicyOrderByInput";

export type ApprovalPolicyFindManyArgs = {
  where?: ApprovalPolicyWhereInput;
  orderBy?: Array<ApprovalPolicyOrderByInput>;
  skip?: number;
  take?: number;
};
