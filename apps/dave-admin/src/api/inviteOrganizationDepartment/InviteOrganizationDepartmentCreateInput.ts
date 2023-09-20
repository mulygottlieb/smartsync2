import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";

export type InviteOrganizationDepartmentCreateInput = {
  invite: InviteWhereUniqueInput;
  organizationDepartment: OrganizationDepartmentWhereUniqueInput;
};
