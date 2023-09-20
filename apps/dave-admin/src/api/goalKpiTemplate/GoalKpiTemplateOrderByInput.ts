import { SortOrder } from "../../util/SortOrder";

export type GoalKpiTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  typeField?: SortOrder;
  unit?: SortOrder;
  operator?: SortOrder;
  currentValue?: SortOrder;
  targetValue?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  leadId?: SortOrder;
};
