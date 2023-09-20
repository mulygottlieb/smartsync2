import { RolePermissionWhereInput } from "./RolePermissionWhereInput";
import { RolePermissionOrderByInput } from "./RolePermissionOrderByInput";

export type RolePermissionFindManyArgs = {
  where?: RolePermissionWhereInput;
  orderBy?: Array<RolePermissionOrderByInput>;
  skip?: number;
  take?: number;
};
