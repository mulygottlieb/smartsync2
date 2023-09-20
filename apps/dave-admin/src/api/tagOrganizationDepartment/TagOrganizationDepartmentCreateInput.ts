import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type TagOrganizationDepartmentCreateInput = {
  tag: TagWhereUniqueInput;
  organizationDepartment: OrganizationDepartmentWhereUniqueInput;
};
