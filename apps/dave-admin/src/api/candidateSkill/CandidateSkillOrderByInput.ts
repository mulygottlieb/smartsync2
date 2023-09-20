import { SortOrder } from "../../util/SortOrder";

export type CandidateSkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  candidateId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
