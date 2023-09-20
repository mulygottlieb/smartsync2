import { SortOrder } from "../../util/SortOrder";

export type GoalTimeFrameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
