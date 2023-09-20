import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationProjectWhereInput = {
  tag?: TagWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  id?: StringFilter;
};
