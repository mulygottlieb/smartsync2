import { SortOrder } from "../../util/SortOrder";

export type TaskStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  value?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  color?: SortOrder;
  isSystem?: SortOrder;
  organizationTeamId?: SortOrder;
  organizationId?: SortOrder;
  projectId?: SortOrder;
  tenantId?: SortOrder;
};
