import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "note";

export const PaymentTitle = (record: TPayment): string => {
  return record.note?.toString() || String(record.id);
};
