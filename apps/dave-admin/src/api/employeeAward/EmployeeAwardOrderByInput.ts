import { SortOrder } from "../../util/SortOrder";

export type EmployeeAwardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  year?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
