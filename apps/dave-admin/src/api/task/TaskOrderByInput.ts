import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  estimate?: SortOrder;
  dueDate?: SortOrder;
  numberField?: SortOrder;
  prefix?: SortOrder;
  priority?: SortOrder;
  size?: SortOrder;
  publicField?: SortOrder;
  startDate?: SortOrder;
  resolvedAt?: SortOrder;
  version?: SortOrder;
  issueType?: SortOrder;
  organizationSprintId?: SortOrder;
  projectId?: SortOrder;
  organizationId?: SortOrder;
  parentId?: SortOrder;
  creatorId?: SortOrder;
  tenantId?: SortOrder;
};
