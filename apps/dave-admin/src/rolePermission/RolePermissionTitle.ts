import { RolePermission as TRolePermission } from "../api/rolePermission/RolePermission";

export const ROLEPERMISSION_TITLE_FIELD = "permission";

export const RolePermissionTitle = (record: TRolePermission): string => {
  return record.permission?.toString() || String(record.id);
};
