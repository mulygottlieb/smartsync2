import { SortOrder } from "../../util/SortOrder";

export type WarehouseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  code?: SortOrder;
  email?: SortOrder;
  description?: SortOrder;
  active?: SortOrder;
  contactId?: SortOrder;
  tenantId?: SortOrder;
  logoId?: SortOrder;
  organizationId?: SortOrder;
};
