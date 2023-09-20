import { Payment } from "../payment/Payment";
import { Tag } from "../tag/Tag";

export type TagPayment = {
  payment?: Payment;
  tag?: Tag;
  id: string;
};
