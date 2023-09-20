import { InvoiceItem as TInvoiceItem } from "../api/invoiceItem/InvoiceItem";

export const INVOICEITEM_TITLE_FIELD = "description";

export const InvoiceItemTitle = (record: TInvoiceItem): string => {
  return record.description?.toString() || String(record.id);
};
