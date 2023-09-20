import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  typeOfExpense?: SortOrder;
  notes?: SortOrder;
  currency?: SortOrder;
  valueDate?: SortOrder;
  purpose?: SortOrder;
  taxType?: SortOrder;
  taxLabel?: SortOrder;
  rateValue?: SortOrder;
  receipt?: SortOrder;
  splitExpense?: SortOrder;
  reference?: SortOrder;
  status?: SortOrder;
  organizationContactId?: SortOrder;
  categoryId?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  projectId?: SortOrder;
  organizationId?: SortOrder;
  vendorId?: SortOrder;
};
