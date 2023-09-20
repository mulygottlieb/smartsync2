import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  totalValue?: SortOrder;
  applyTax?: SortOrder;
  applyDiscount?: SortOrder;
  projectId?: SortOrder;
  invoiceId?: SortOrder;
  taskId?: SortOrder;
  expenseId?: SortOrder;
  employeeId?: SortOrder;
  productId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
};
