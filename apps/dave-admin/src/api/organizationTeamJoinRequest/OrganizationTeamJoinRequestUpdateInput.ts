import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrganizationTeamJoinRequestUpdateInput = {
  email?: string;
  fullName?: string | null;
  linkAddress?: string | null;
  position?: string | null;
  status?: string | null;
  code?: number | null;
  token?: string | null;
  expiredAt?: Date | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
