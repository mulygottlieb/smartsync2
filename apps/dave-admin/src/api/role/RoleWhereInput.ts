import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { OrganizationTeamEmployeeListRelationFilter } from "../organizationTeamEmployee/OrganizationTeamEmployeeListRelationFilter";
import { RolePermissionListRelationFilter } from "../rolePermission/RolePermissionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  isSystem?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  invite?: InviteListRelationFilter;
  organizationTeamEmployee?: OrganizationTeamEmployeeListRelationFilter;
  rolePermission?: RolePermissionListRelationFilter;
  user?: UserListRelationFilter;
};
