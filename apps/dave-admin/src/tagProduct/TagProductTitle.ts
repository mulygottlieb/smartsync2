import { TagProduct as TTagProduct } from "../api/tagProduct/TagProduct";

export const TAGPRODUCT_TITLE_FIELD = "id";

export const TagProductTitle = (record: TTagProduct): string => {
  return record.id?.toString() || String(record.id);
};
