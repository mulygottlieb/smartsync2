import { SortOrder } from "../../util/SortOrder";

export type ApprovalPolicyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  approvalType?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
