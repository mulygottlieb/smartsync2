import { SortOrder } from "../../util/SortOrder";

export type TaskRelatedIssueTypeOrderByInput = {
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
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  projectId?: SortOrder;
};
