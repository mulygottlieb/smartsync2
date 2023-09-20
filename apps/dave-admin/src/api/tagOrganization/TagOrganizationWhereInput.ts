import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationWhereInput = {
  organization?: OrganizationWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
