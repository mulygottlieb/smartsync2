import { Tag } from "../tag/Tag";
import { Merchant } from "../merchant/Merchant";

export type TagMerchant = {
  tag?: Tag;
  merchant?: Merchant;
  id: string;
};
