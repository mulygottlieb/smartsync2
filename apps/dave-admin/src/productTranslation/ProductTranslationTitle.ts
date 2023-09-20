import { ProductTranslation as TProductTranslation } from "../api/productTranslation/ProductTranslation";

export const PRODUCTTRANSLATION_TITLE_FIELD = "name";

export const ProductTranslationTitle = (
  record: TProductTranslation
): string => {
  return record.name?.toString() || String(record.id);
};
