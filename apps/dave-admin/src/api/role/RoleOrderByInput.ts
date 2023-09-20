import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  isSystem?: SortOrder;
  tenantId?: SortOrder;
};
