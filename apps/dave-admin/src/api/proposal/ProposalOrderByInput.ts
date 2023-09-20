import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  jobPostUrl?: SortOrder;
  valueDate?: SortOrder;
  jobPostContent?: SortOrder;
  proposalContent?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  organizationContactId?: SortOrder;
  organizationId?: SortOrder;
  employeeId?: SortOrder;
};
