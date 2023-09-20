import { TagPaymentWhereInput } from "./TagPaymentWhereInput";
import { TagPaymentOrderByInput } from "./TagPaymentOrderByInput";

export type TagPaymentFindManyArgs = {
  where?: TagPaymentWhereInput;
  orderBy?: Array<TagPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
