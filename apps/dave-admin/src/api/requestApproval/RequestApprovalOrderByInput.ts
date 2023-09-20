import { SortOrder } from "../../util/SortOrder";

export type RequestApprovalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  createdBy?: SortOrder;
  createdByName?: SortOrder;
  minCount?: SortOrder;
  requestId?: SortOrder;
  requestType?: SortOrder;
  approvalPolicyId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
