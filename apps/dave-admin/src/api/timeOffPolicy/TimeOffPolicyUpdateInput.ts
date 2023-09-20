import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeOffPolicyEmployeeUpdateManyWithoutTimeOffPoliciesInput } from "./TimeOffPolicyEmployeeUpdateManyWithoutTimeOffPoliciesInput";
import { TimeOffRequestUpdateManyWithoutTimeOffPoliciesInput } from "./TimeOffRequestUpdateManyWithoutTimeOffPoliciesInput";

export type TimeOffPolicyUpdateInput = {
  name?: string;
  requiresApproval?: boolean;
  paid?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  timeOffPolicyEmployee?: TimeOffPolicyEmployeeUpdateManyWithoutTimeOffPoliciesInput;
  timeOffRequest?: TimeOffRequestUpdateManyWithoutTimeOffPoliciesInput;
};
