import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationContactUpdateInput = {
  organizationContact?: OrganizationContactWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
