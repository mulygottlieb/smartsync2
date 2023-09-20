import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { RequestApprovalUpdateManyWithoutApprovalPoliciesInput } from "./RequestApprovalUpdateManyWithoutApprovalPoliciesInput";

export type ApprovalPolicyUpdateInput = {
  name?: string;
  description?: string | null;
  approvalType?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  requestApproval?: RequestApprovalUpdateManyWithoutApprovalPoliciesInput;
};
