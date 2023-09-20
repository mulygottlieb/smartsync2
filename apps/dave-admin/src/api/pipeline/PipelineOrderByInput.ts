import { SortOrder } from "../../util/SortOrder";

export type PipelineOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  isActive?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
