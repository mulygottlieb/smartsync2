import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  updatedAt?: SortOrder;
  name?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  color?: SortOrder;
  isSystem?: SortOrder;
  icon?: SortOrder;
  organizationTeamId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
