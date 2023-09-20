import { SortOrder } from "../../util/SortOrder";

export type IncomeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  currency?: SortOrder;
  valueDate?: SortOrder;
  notes?: SortOrder;
  isBonus?: SortOrder;
  reference?: SortOrder;
  clientId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  employeeId?: SortOrder;
};
