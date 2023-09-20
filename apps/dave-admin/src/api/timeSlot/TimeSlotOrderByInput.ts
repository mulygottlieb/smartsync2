import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  keyboard?: SortOrder;
  mouse?: SortOrder;
  overall?: SortOrder;
  startedAt?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
