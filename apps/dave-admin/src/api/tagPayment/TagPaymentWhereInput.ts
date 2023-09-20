import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagPaymentWhereInput = {
  payment?: PaymentWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
