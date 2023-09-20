import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type TaskVersionUpdateInput = {
  name?: string;
  value?: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
