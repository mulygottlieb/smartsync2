import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type TagOrganizationDepartmentUpdateInput = {
  tag?: TagWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
};
