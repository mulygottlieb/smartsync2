import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";

export type TagMerchantCreateInput = {
  tag: TagWhereUniqueInput;
  merchant: MerchantWhereUniqueInput;
};
