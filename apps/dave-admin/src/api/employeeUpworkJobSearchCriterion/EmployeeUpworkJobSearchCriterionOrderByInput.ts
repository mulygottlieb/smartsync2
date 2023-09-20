import { SortOrder } from "../../util/SortOrder";

export type EmployeeUpworkJobSearchCriterionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  keyword?: SortOrder;
  jobType?: SortOrder;
  jobPresetId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  occupationId?: SortOrder;
  employeeId?: SortOrder;
  categoryId?: SortOrder;
};
