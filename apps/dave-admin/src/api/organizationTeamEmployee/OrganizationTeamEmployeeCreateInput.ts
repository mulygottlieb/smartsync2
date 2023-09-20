import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrganizationTeamEmployeeCreateInput = {
  isTrackingEnabled?: boolean | null;
  organizationTeam: OrganizationTeamWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
  role?: RoleWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
