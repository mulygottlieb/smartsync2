import { SortOrder } from "../../util/SortOrder";

export type TimeLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startedAt?: SortOrder;
  stoppedAt?: SortOrder;
  logType?: SortOrder;
  source?: SortOrder;
  description?: SortOrder;
  reason?: SortOrder;
  isBillable?: SortOrder;
  deletedAt?: SortOrder;
  isRunning?: SortOrder;
  version?: SortOrder;
  organizationTeamId?: SortOrder;
  taskId?: SortOrder;
  projectId?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  organizationContactId?: SortOrder;
  timesheetId?: SortOrder;
  tenantId?: SortOrder;
};
