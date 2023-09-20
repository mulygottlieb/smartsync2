import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type TaskRelatedIssueTypeCreateInput = {
  name: string;
  value: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem: boolean;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
};
