import { SortOrder } from "../../util/SortOrder";

export type EmployeeLevelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  level?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
