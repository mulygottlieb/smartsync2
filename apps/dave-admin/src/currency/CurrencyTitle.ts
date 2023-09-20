import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "isoCode";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.isoCode?.toString() || String(record.id);
};
