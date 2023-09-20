import { ProductOptionGroupTranslation as TProductOptionGroupTranslation } from "../api/productOptionGroupTranslation/ProductOptionGroupTranslation";

export const PRODUCTOPTIONGROUPTRANSLATION_TITLE_FIELD = "name";

export const ProductOptionGroupTranslationTitle = (
  record: TProductOptionGroupTranslation
): string => {
  return record.name?.toString() || String(record.id);
};
