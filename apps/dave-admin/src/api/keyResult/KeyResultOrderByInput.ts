import { SortOrder } from "../../util/SortOrder";

export type KeyResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  typeField?: SortOrder;
  targetValue?: SortOrder;
  initialValue?: SortOrder;
  unit?: SortOrder;
  update?: SortOrder;
  progress?: SortOrder;
  deadline?: SortOrder;
  hardDeadline?: SortOrder;
  softDeadline?: SortOrder;
  status?: SortOrder;
  weight?: SortOrder;
  projectId?: SortOrder;
  kpiId?: SortOrder;
  ownerId?: SortOrder;
  tenantId?: SortOrder;
  leadId?: SortOrder;
  organizationId?: SortOrder;
  taskId?: SortOrder;
  goalKeyResultGoalIdTogoalId?: SortOrder;
};
