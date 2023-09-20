import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagMerchantWhereInput = {
  tag?: TagWhereUniqueInput;
  merchant?: MerchantWhereUniqueInput;
  id?: StringFilter;
};
