import { SortOrder } from "../../util/SortOrder";

export type CandidatePersonalQualityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  tenantId?: SortOrder;
  interviewId?: SortOrder;
  organizationId?: SortOrder;
};
