import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagPaymentCreateInput = {
  payment: PaymentWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
