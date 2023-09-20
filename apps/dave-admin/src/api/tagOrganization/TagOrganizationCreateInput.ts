import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationCreateInput = {
  organization: OrganizationWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
