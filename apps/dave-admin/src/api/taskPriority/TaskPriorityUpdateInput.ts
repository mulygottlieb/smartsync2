import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type TaskPriorityUpdateInput = {
  name?: string;
  value?: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
};
