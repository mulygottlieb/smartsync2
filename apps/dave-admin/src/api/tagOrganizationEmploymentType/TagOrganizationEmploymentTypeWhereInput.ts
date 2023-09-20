import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationEmploymentTypeWhereInput = {
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
