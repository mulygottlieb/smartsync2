import { Income as TIncome } from "../api/income/Income";

export const INCOME_TITLE_FIELD = "currency";

export const IncomeTitle = (record: TIncome): string => {
  return record.currency?.toString() || String(record.id);
};
