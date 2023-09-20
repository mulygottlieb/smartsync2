import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  invoiceDate?: SortOrder;
  invoiceNumber?: SortOrder;
  dueDate?: SortOrder;
  currency?: SortOrder;
  discountValue?: SortOrder;
  paid?: SortOrder;
  tax?: SortOrder;
  tax2?: SortOrder;
  terms?: SortOrder;
  totalValue?: SortOrder;
  status?: SortOrder;
  isEstimate?: SortOrder;
  isAccepted?: SortOrder;
  discountType?: SortOrder;
  taxType?: SortOrder;
  tax2Type?: SortOrder;
  invoiceType?: SortOrder;
  sentTo?: SortOrder;
  organizationContactId?: SortOrder;
  internalNote?: SortOrder;
  alreadyPaid?: SortOrder;
  amountDue?: SortOrder;
  hasRemainingAmountInvoiced?: SortOrder;
  token?: SortOrder;
  isArchived?: SortOrder;
  organizationId?: SortOrder;
  tenantId?: SortOrder;
  fromOrganizationId?: SortOrder;
  toContactId?: SortOrder;
};