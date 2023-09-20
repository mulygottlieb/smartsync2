import { SortOrder } from "../../util/SortOrder";

export type CandidateFeedbackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  rating?: SortOrder;
  status?: SortOrder;
  interviewId?: SortOrder;
  organizationId?: SortOrder;
  interviewerId?: SortOrder;
  tenantId?: SortOrder;
  candidateId?: SortOrder;
};
