import { ProductVariantPrice as TProductVariantPrice } from "../api/productVariantPrice/ProductVariantPrice";

export const PRODUCTVARIANTPRICE_TITLE_FIELD = "unitCostCurrency";

export const ProductVariantPriceTitle = (
  record: TProductVariantPrice
): string => {
  return record.unitCostCurrency?.toString() || String(record.id);
};
