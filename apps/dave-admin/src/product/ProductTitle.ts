import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "code";

export const ProductTitle = (record: TProduct): string => {
  return record.code?.toString() || String(record.id);
};
