import { SortOrder } from "../../util/SortOrder";

export type GoalTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  level?: SortOrder;
  category?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
