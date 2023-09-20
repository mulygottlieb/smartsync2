import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type TagInvoiceUpdateInput = {
  tag?: TagWhereUniqueInput;
  invoice?: InvoiceWhereUniqueInput;
};
