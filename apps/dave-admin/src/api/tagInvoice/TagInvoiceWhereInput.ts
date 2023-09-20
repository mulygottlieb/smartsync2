import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagInvoiceWhereInput = {
  tag?: TagWhereUniqueInput;
  invoice?: InvoiceWhereUniqueInput;
  id?: StringFilter;
};
