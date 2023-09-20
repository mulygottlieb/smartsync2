import { SortOrder } from "../../util/SortOrder";

export type CandidateTechnologyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  interviewId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
