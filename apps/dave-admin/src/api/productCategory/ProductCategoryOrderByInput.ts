import { SortOrder } from "../../util/SortOrder";

export type ProductCategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  imageId?: SortOrder;
};
