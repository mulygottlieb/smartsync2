import { SortOrder } from "../../util/SortOrder";

export type AvailabilitySlotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  allDay?: SortOrder;
  typeField?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
