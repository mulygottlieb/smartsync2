import { SortOrder } from "../../util/SortOrder";

export type EmployeeRecurringExpenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDay?: SortOrder;
  startMonth?: SortOrder;
  startYear?: SortOrder;
  startDate?: SortOrder;
  endDay?: SortOrder;
  endMonth?: SortOrder;
  endYear?: SortOrder;
  endDate?: SortOrder;
  categoryName?: SortOrder;
  value?: SortOrder;
  currency?: SortOrder;
  parentRecurringExpenseId?: SortOrder;
  employeeId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
