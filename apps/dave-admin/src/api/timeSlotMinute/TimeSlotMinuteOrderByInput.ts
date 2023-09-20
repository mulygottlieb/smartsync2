import { SortOrder } from "../../util/SortOrder";

export type TimeSlotMinuteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  keyboard?: SortOrder;
  mouse?: SortOrder;
  datetime?: SortOrder;
  organizationId?: SortOrder;
  timeSlotId?: SortOrder;
  tenantId?: SortOrder;
};
