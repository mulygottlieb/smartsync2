import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type TagOrganizationProjectCreateInput = {
  tag: TagWhereUniqueInput;
  organizationProject: OrganizationProjectWhereUniqueInput;
};
