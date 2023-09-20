import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TagEmployeeLevelUpdateManyWithoutEmployeeLevelsInput } from "./TagEmployeeLevelUpdateManyWithoutEmployeeLevelsInput";

export type EmployeeLevelUpdateInput = {
  level?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  tagEmployeeLevel?: TagEmployeeLevelUpdateManyWithoutEmployeeLevelsInput;
};
