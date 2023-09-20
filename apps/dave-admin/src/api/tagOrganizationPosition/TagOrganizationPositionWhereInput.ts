import { OrganizationPositionWhereUniqueInput } from "../organizationPosition/OrganizationPositionWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationPositionWhereInput = {
  organizationPosition?: OrganizationPositionWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
