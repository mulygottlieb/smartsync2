import { OrganizationPositionWhereUniqueInput } from "../organizationPosition/OrganizationPositionWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationPositionUpdateInput = {
  organizationPosition?: OrganizationPositionWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
