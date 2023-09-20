import { Deal as TDeal } from "../api/deal/Deal";

export const DEAL_TITLE_FIELD = "title";

export const DealTitle = (record: TDeal): string => {
  return record.title?.toString() || String(record.id);
};
