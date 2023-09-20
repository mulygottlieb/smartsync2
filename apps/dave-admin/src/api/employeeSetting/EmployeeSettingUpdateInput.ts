import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type EmployeeSettingUpdateInput = {
  month?: number;
  year?: number;
  settingType?: string;
  value?: number;
  currency?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput;
};
