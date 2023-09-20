import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "currency";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.currency?.toString() || String(record.id);
};
