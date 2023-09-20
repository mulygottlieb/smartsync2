import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type InviteOrganizationDepartmentUpdateInput = {
  invite?: InviteWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
};
