import { SortOrder } from "../../util/SortOrder";

export type WarehouseProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  productId?: SortOrder;
  tenantId?: SortOrder;
  warehouseId?: SortOrder;
  organizationId?: SortOrder;
};
