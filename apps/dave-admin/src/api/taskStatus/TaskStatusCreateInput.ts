import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskStatusCreateInput = {
  name: string;
  value: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem: boolean;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
