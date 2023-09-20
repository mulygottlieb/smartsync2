import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type TagInvoiceCreateInput = {
  tag: TagWhereUniqueInput;
  invoice: InvoiceWhereUniqueInput;
};
