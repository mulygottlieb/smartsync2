import { SortOrder } from "../../util/SortOrder";

export type TaskLinkedIssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  action?: SortOrder;
  taskToId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  taskFromId?: SortOrder;
};
