import { ProductCategory as TProductCategory } from "../api/productCategory/ProductCategory";

export const PRODUCTCATEGORY_TITLE_FIELD = "imageUrl";

export const ProductCategoryTitle = (record: TProductCategory): string => {
  return record.imageUrl?.toString() || String(record.id);
};
