import { SortOrder } from "../../util/SortOrder";

export type InvoiceEstimateHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  action?: SortOrder;
  invoiceId?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  userId?: SortOrder;
};
