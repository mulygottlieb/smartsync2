import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { RequestApprovalCreateNestedManyWithoutApprovalPoliciesInput } from "./RequestApprovalCreateNestedManyWithoutApprovalPoliciesInput";

export type ApprovalPolicyCreateInput = {
  name: string;
  description?: string | null;
  approvalType?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  requestApproval?: RequestApprovalCreateNestedManyWithoutApprovalPoliciesInput;
};
