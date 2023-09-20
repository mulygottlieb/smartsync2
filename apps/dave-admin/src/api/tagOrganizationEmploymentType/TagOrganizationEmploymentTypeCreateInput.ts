import { OrganizationEmploymentTypeWhereUniqueInput } from "../organizationEmploymentType/OrganizationEmploymentTypeWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationEmploymentTypeCreateInput = {
  organizationEmploymentType: OrganizationEmploymentTypeWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
