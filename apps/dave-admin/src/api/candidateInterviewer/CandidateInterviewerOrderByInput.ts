import { SortOrder } from "../../util/SortOrder";

export type CandidateInterviewerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  organizationId?: SortOrder;
  employeeId?: SortOrder;
  interviewId?: SortOrder;
  tenantId?: SortOrder;
  candidateFeedbackId?: SortOrder;
};
