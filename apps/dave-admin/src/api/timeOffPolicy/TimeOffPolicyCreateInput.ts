import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeOffPolicyEmployeeCreateNestedManyWithoutTimeOffPoliciesInput } from "./TimeOffPolicyEmployeeCreateNestedManyWithoutTimeOffPoliciesInput";
import { TimeOffRequestCreateNestedManyWithoutTimeOffPoliciesInput } from "./TimeOffRequestCreateNestedManyWithoutTimeOffPoliciesInput";

export type TimeOffPolicyCreateInput = {
  name: string;
  requiresApproval: boolean;
  paid: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  timeOffPolicyEmployee?: TimeOffPolicyEmployeeCreateNestedManyWithoutTimeOffPoliciesInput;
  timeOffRequest?: TimeOffRequestCreateNestedManyWithoutTimeOffPoliciesInput;
};
