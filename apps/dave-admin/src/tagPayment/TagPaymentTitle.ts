import { TagPayment as TTagPayment } from "../api/tagPayment/TagPayment";

export const TAGPAYMENT_TITLE_FIELD = "id";

export const TagPaymentTitle = (record: TTagPayment): string => {
  return record.id?.toString() || String(record.id);
};
