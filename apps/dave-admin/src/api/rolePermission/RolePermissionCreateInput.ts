import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type RolePermissionCreateInput = {
  permission: string;
  enabled?: boolean | null;
  description?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  role: RoleWhereUniqueInput;
};
