import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type GoalGeneralSettingUpdateInput = {
  maxObjectives?: number;
  maxKeyResults?: number;
  employeeCanCreateObjective?: boolean;
  canOwnObjectives?: string;
  canOwnKeyResult?: string;
  krTypeKPI?: boolean;
  krTypeTask?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
