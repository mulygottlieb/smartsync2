import { ProductTypeTranslation as TProductTypeTranslation } from "../api/productTypeTranslation/ProductTypeTranslation";

export const PRODUCTTYPETRANSLATION_TITLE_FIELD = "name";

export const ProductTypeTranslationTitle = (
  record: TProductTypeTranslation
): string => {
  return record.name?.toString() || String(record.id);
};
