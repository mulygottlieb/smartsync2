import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput } from "./TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput";

export type EmployeeLevelCreateInput = {
  level: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  tagEmployeeLevel?: TagEmployeeLevelCreateNestedManyWithoutEmployeeLevelsInput;
};
