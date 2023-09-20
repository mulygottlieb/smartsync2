import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeePhoneUpdateInput = {
  typeField?: string | null;
  phoneNumber?: string;
  organization?: OrganizationWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
