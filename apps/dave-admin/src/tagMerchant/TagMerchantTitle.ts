import { TagMerchant as TTagMerchant } from "../api/tagMerchant/TagMerchant";

export const TAGMERCHANT_TITLE_FIELD = "id";

export const TagMerchantTitle = (record: TTagMerchant): string => {
  return record.id?.toString() || String(record.id);
};
