import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationDepartmentWhereInput = {
  tag?: TagWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
  id?: StringFilter;
};
