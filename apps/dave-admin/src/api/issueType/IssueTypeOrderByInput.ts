import { SortOrder } from "../../util/SortOrder";

export type IssueTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  value?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  color?: SortOrder;
  isSystem?: SortOrder;
  projectId?: SortOrder;
  organizationId?: SortOrder;
  imageId?: SortOrder;
  organizationTeamId?: SortOrder;
  tenantId?: SortOrder;
};
