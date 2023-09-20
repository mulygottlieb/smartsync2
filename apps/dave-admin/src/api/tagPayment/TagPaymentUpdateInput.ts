import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagPaymentUpdateInput = {
  payment?: PaymentWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
