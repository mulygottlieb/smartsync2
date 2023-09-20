import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type TagOrganizationTeamCreateInput = {
  tag: TagWhereUniqueInput;
  organizationTeam: OrganizationTeamWhereUniqueInput;
};
