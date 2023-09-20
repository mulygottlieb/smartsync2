import { ProductOptionTranslation as TProductOptionTranslation } from "../api/productOptionTranslation/ProductOptionTranslation";

export const PRODUCTOPTIONTRANSLATION_TITLE_FIELD = "name";

export const ProductOptionTranslationTitle = (
  record: TProductOptionTranslation
): string => {
  return record.name?.toString() || String(record.id);
};
