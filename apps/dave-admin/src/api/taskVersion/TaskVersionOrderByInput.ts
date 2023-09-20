import { SortOrder } from "../../util/SortOrder";

export type TaskVersionOrderByInput = {
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
  projectId?: SortOrder;
  organizationTeamId?: SortOrder;
  organizationId?: SortOrder;
};
