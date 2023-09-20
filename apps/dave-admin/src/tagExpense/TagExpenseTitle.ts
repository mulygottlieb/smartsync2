import { TagExpense as TTagExpense } from "../api/tagExpense/TagExpense";

export const TAGEXPENSE_TITLE_FIELD = "id";

export const TagExpenseTitle = (record: TTagExpense): string => {
  return record.id?.toString() || String(record.id);
};
