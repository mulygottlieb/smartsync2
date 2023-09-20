import { ProductType as TProductType } from "../api/productType/ProductType";

export const PRODUCTTYPE_TITLE_FIELD = "icon";

export const ProductTypeTitle = (record: TProductType): string => {
  return record.icon?.toString() || String(record.id);
};
