import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationContactWhereInput = {
  organizationContact?: OrganizationContactWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
