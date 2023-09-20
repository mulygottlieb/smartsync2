import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { InviteUpdateManyWithoutRolesInput } from "./InviteUpdateManyWithoutRolesInput";
import { OrganizationTeamEmployeeUpdateManyWithoutRolesInput } from "./OrganizationTeamEmployeeUpdateManyWithoutRolesInput";
import { RolePermissionUpdateManyWithoutRolesInput } from "./RolePermissionUpdateManyWithoutRolesInput";
import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string;
  isSystem?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  invite?: InviteUpdateManyWithoutRolesInput;
  organizationTeamEmployee?: OrganizationTeamEmployeeUpdateManyWithoutRolesInput;
  rolePermission?: RolePermissionUpdateManyWithoutRolesInput;
  user?: UserUpdateManyWithoutRolesInput;
};
