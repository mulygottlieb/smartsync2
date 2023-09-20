import { SortOrder } from "../../util/SortOrder";

export type TimesheetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  keyboard?: SortOrder;
  mouse?: SortOrder;
  overall?: SortOrder;
  startedAt?: SortOrder;
  stoppedAt?: SortOrder;
  approvedAt?: SortOrder;
  submittedAt?: SortOrder;
  lockedAt?: SortOrder;
  isBilled?: SortOrder;
  status?: SortOrder;
  deletedAt?: SortOrder;
  tenantId?: SortOrder;
  approvedById?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
};
