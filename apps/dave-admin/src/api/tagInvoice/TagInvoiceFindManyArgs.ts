import { TagInvoiceWhereInput } from "./TagInvoiceWhereInput";
import { TagInvoiceOrderByInput } from "./TagInvoiceOrderByInput";

export type TagInvoiceFindManyArgs = {
  where?: TagInvoiceWhereInput;
  orderBy?: Array<TagInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
