import { ProductOptionGroup as TProductOptionGroup } from "../api/productOptionGroup/ProductOptionGroup";

export const PRODUCTOPTIONGROUP_TITLE_FIELD = "name";

export const ProductOptionGroupTitle = (
  record: TProductOptionGroup
): string => {
  return record.name?.toString() || String(record.id);
};
