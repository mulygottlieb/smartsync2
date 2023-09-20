import { OrganizationPositionWhereUniqueInput } from "../organizationPosition/OrganizationPositionWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationPositionCreateInput = {
  organizationPosition: OrganizationPositionWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
