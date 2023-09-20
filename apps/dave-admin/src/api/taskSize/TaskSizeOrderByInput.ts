import { SortOrder } from "../../util/SortOrder";

export type TaskSizeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  value?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  color?: SortOrder;
  isSystem?: SortOrder;
  organizationId?: SortOrder;
  projectId?: SortOrder;
  organizationTeamId?: SortOrder;
  tenantId?: SortOrder;
};
