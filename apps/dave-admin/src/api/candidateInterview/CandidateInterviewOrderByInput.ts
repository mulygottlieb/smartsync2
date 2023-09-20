import { SortOrder } from "../../util/SortOrder";

export type CandidateInterviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  location?: SortOrder;
  note?: SortOrder;
  isArchived?: SortOrder;
  rating?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  candidateId?: SortOrder;
};
