import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationTeamWhereInput = {
  tag?: TagWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  id?: StringFilter;
};
