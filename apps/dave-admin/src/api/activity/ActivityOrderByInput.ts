import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  metaData?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  duration?: SortOrder;
  typeField?: SortOrder;
  source?: SortOrder;
  deletedAt?: SortOrder;
  recordedAt?: SortOrder;
  taskId?: SortOrder;
  timeSlotId?: SortOrder;
  projectId?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
