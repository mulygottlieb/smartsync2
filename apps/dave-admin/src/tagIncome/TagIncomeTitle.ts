import { TagIncome as TTagIncome } from "../api/tagIncome/TagIncome";

export const TAGINCOME_TITLE_FIELD = "id";

export const TagIncomeTitle = (record: TTagIncome): string => {
  return record.id?.toString() || String(record.id);
};
