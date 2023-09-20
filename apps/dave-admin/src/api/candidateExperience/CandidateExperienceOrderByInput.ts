import { SortOrder } from "../../util/SortOrder";

export type CandidateExperienceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  occupation?: SortOrder;
  duration?: SortOrder;
  description?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  candidateId?: SortOrder;
};
