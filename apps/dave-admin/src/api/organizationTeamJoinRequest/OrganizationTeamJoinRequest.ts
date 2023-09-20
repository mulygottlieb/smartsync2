import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { User } from "../user/User";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type OrganizationTeamJoinRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  fullName: string | null;
  linkAddress: string | null;
  position: string | null;
  status: string | null;
  code: number | null;
  token: string | null;
  expiredAt: Date | null;
  organizationTeam?: OrganizationTeam | null;
  user?: User | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
