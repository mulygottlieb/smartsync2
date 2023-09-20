import { SortOrder } from "../../util/SortOrder";

export type TaskPriorityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  value?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  color?: SortOrder;
  isSystem?: SortOrder;
  tenantId?: SortOrder;
  organizationTeamId?: SortOrder;
  organizationId?: SortOrder;
  projectId?: SortOrder;
};