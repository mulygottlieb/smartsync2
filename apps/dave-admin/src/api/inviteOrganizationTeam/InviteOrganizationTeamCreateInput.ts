import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type InviteOrganizationTeamCreateInput = {
  invite: InviteWhereUniqueInput;
  organizationTeam: OrganizationTeamWhereUniqueInput;
};
