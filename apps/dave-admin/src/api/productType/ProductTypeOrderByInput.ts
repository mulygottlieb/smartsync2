import { SortOrder } from "../../util/SortOrder";

export type ProductTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  icon?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
