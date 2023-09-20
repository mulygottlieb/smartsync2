import { SortOrder } from "../../util/SortOrder";

export type CandidateEducationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  schoolName?: SortOrder;
  degree?: SortOrder;
  field?: SortOrder;
  completionDate?: SortOrder;
  notes?: SortOrder;
  tenantId?: SortOrder;
  candidateId?: SortOrder;
  organizationId?: SortOrder;
};
