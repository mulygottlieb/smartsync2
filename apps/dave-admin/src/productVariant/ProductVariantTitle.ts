import { ProductVariant as TProductVariant } from "../api/productVariant/ProductVariant";

export const PRODUCTVARIANT_TITLE_FIELD = "notes";

export const ProductVariantTitle = (record: TProductVariant): string => {
  return record.notes?.toString() || String(record.id);
};
