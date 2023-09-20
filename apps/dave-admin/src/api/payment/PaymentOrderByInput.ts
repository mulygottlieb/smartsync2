import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  invoiceId?: SortOrder;
  projectId?: SortOrder;
  organizationId?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  paymentDate?: SortOrder;
  amount?: SortOrder;
  note?: SortOrder;
  currency?: SortOrder;
  overdue?: SortOrder;
  paymentMethod?: SortOrder;
  recordedById?: SortOrder;
  employeeId?: SortOrder;
  tenantId?: SortOrder;
  organizationContactId?: SortOrder;
};
