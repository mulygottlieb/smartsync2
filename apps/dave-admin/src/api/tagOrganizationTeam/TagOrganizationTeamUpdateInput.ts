import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type TagOrganizationTeamUpdateInput = {
  tag?: TagWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
};
