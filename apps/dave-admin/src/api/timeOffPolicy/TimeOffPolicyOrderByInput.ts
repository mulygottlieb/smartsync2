import { SortOrder } from "../../util/SortOrder";

export type TimeOffPolicyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  requiresApproval?: SortOrder;
  paid?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
