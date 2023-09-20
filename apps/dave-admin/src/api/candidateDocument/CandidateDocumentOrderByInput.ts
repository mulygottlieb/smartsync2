import { SortOrder } from "../../util/SortOrder";

export type CandidateDocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  documentUrl?: SortOrder;
  candidateId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
