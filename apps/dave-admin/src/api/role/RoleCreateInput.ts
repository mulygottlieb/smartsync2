import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { InviteCreateNestedManyWithoutRolesInput } from "./InviteCreateNestedManyWithoutRolesInput";
import { OrganizationTeamEmployeeCreateNestedManyWithoutRolesInput } from "./OrganizationTeamEmployeeCreateNestedManyWithoutRolesInput";
import { RolePermissionCreateNestedManyWithoutRolesInput } from "./RolePermissionCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name: string;
  isSystem: boolean;
  tenant?: TenantWhereUniqueInput | null;
  invite?: InviteCreateNestedManyWithoutRolesInput;
  organizationTeamEmployee?: OrganizationTeamEmployeeCreateNestedManyWithoutRolesInput;
  rolePermission?: RolePermissionCreateNestedManyWithoutRolesInput;
  user?: UserCreateNestedManyWithoutRolesInput;
};
