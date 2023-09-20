import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskSizeUpdateInput = {
  name?: string;
  value?: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem?: boolean;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
