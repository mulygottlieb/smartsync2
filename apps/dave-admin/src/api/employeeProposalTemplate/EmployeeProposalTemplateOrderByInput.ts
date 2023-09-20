import { SortOrder } from "../../util/SortOrder";

export type EmployeeProposalTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  content?: SortOrder;
  isDefault?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
