import { Invite } from "../invite/Invite";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";

export type InviteOrganizationTeam = {
  invite?: Invite;
  organizationTeam?: OrganizationTeam;
  id: string;
};
