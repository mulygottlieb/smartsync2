import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EmployeeAwardUpdateInput = {
  name?: string;
  year?: string;
  employee?: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
