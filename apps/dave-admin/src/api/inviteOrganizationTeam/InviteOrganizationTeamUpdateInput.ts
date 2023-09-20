import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type InviteOrganizationTeamUpdateInput = {
  invite?: InviteWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
};
