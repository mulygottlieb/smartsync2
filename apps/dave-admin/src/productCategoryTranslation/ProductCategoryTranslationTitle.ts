import { ProductCategoryTranslation as TProductCategoryTranslation } from "../api/productCategoryTranslation/ProductCategoryTranslation";

export const PRODUCTCATEGORYTRANSLATION_TITLE_FIELD = "name";

export const ProductCategoryTranslationTitle = (
  record: TProductCategoryTranslation
): string => {
  return record.name?.toString() || String(record.id);
};
