import { SortOrder } from "../../util/SortOrder";

export type OrganizationRecurringExpenseOrderByInput = {
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
  splitExpense?: SortOrder;
  parentRecurringExpenseId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
};
