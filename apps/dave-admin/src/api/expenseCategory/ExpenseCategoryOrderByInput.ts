import { SortOrder } from "../../util/SortOrder";

export type ExpenseCategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
