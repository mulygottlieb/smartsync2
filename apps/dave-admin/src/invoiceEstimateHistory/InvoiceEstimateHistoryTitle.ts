import { InvoiceEstimateHistory as TInvoiceEstimateHistory } from "../api/invoiceEstimateHistory/InvoiceEstimateHistory";

export const INVOICEESTIMATEHISTORY_TITLE_FIELD = "action";

export const InvoiceEstimateHistoryTitle = (
  record: TInvoiceEstimateHistory
): string => {
  return record.action?.toString() || String(record.id);
};
