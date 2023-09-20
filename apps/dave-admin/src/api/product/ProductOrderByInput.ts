import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  enabled?: SortOrder;
  code?: SortOrder;
  imageUrl?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  productTypeId?: SortOrder;
  featuredImageId?: SortOrder;
  productCategoryId?: SortOrder;
};
