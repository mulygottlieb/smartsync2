import { Tag } from "../tag/Tag";
import { Invoice } from "../invoice/Invoice";

export type TagInvoice = {
  tag?: Tag;
  invoice?: Invoice;
  id: string;
};
