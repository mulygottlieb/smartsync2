import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationDepartmentWhereUniqueInput } from "../organizationDepartment/OrganizationDepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InviteOrganizationDepartmentWhereInput = {
  invite?: InviteWhereUniqueInput;
  organizationDepartment?: OrganizationDepartmentWhereUniqueInput;
  id?: StringFilter;
};
