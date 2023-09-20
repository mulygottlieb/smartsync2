import { SortOrder } from "../../util/SortOrder";

export type JobSearchCategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  jobSourceCategoryId?: SortOrder;
  jobSource?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
