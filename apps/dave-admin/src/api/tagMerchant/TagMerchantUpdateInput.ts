import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";

export type TagMerchantUpdateInput = {
  tag?: TagWhereUniqueInput;
  merchant?: MerchantWhereUniqueInput;
};
