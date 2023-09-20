import { SortOrder } from "../../util/SortOrder";

export type ProductOptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  code?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  groupId?: SortOrder;
};
