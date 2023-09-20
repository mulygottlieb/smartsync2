import { SortOrder } from "../../util/SortOrder";

export type JobSearchOccupationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  jobSourceOccupationId?: SortOrder;
  jobSource?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
