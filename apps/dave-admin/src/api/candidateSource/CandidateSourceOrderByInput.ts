import { SortOrder } from "../../util/SortOrder";

export type CandidateSourceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  candidateId?: SortOrder;
};
