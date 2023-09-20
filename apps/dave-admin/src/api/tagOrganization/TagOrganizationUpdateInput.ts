import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationUpdateInput = {
  organization?: OrganizationWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
