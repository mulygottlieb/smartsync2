import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type RequestApprovalEmployeeUpdateInput = {
  status?: number | null;
  organization?: OrganizationWhereUniqueInput | null;
  requestApproval?: RequestApprovalWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput;
};
