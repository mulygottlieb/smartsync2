import { SortOrder } from "../../util/SortOrder";

export type RolePermissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  permission?: SortOrder;
  enabled?: SortOrder;
  description?: SortOrder;
  tenantId?: SortOrder;
  roleId?: SortOrder;
};
