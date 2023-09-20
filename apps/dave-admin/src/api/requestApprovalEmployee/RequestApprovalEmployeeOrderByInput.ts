import { SortOrder } from "../../util/SortOrder";

export type RequestApprovalEmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  organizationId?: SortOrder;
  requestApprovalId?: SortOrder;
  tenantId?: SortOrder;
  employeeId?: SortOrder;
};
