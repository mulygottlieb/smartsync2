import { SortOrder } from "../../util/SortOrder";

export type WarehouseProductVariantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  warehouseProductId?: SortOrder;
  tenantId?: SortOrder;
  variantId?: SortOrder;
  organizationId?: SortOrder;
};
