import { ProductVariantOptionsProductOption as TProductVariantOptionsProductOption } from "../api/productVariantOptionsProductOption/ProductVariantOptionsProductOption";

export const PRODUCTVARIANTOPTIONSPRODUCTOPTION_TITLE_FIELD = "id";

export const ProductVariantOptionsProductOptionTitle = (
  record: TProductVariantOptionsProductOption
): string => {
  return record.id?.toString() || String(record.id);
};
