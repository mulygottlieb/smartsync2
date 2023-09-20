import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InviteOrganizationTeamWhereInput = {
  invite?: InviteWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  id?: StringFilter;
};
