import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationContactCreateInput = {
  organizationContact: OrganizationContactWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
