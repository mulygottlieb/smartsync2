import { SortOrder } from "../../util/SortOrder";

export type EventTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  durationUnit?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  isActive?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
