import { SortOrder } from "../../util/SortOrder";

export type EmployeePhoneOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  phoneNumber?: SortOrder;
  organizationId?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
};
