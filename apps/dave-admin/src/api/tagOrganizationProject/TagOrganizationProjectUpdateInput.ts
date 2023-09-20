import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type TagOrganizationProjectUpdateInput = {
  tag?: TagWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
};
