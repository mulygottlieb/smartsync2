import { TagInvoice as TTagInvoice } from "../api/tagInvoice/TagInvoice";

export const TAGINVOICE_TITLE_FIELD = "id";

export const TagInvoiceTitle = (record: TTagInvoice): string => {
  return record.id?.toString() || String(record.id);
};
