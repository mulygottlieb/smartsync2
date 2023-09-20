import { InvoiceEstimateHistoryWhereInput } from "./InvoiceEstimateHistoryWhereInput";
import { InvoiceEstimateHistoryOrderByInput } from "./InvoiceEstimateHistoryOrderByInput";

export type InvoiceEstimateHistoryFindManyArgs = {
  where?: InvoiceEstimateHistoryWhereInput;
  orderBy?: Array<InvoiceEstimateHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
