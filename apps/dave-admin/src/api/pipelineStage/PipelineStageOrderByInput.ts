import { SortOrder } from "../../util/SortOrder";

export type PipelineStageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  index?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  pipelineId?: SortOrder;
};
