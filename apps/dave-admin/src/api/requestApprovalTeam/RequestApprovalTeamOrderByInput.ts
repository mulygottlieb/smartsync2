import { SortOrder } from "../../util/SortOrder";

export type RequestApprovalTeamOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  requestApprovalId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  teamId?: SortOrder;
};
