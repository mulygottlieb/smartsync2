import { ProductVariantSetting as TProductVariantSetting } from "../api/productVariantSetting/ProductVariantSetting";

export const PRODUCTVARIANTSETTING_TITLE_FIELD = "id";

export const ProductVariantSettingTitle = (
  record: TProductVariantSetting
): string => {
  return record.id?.toString() || String(record.id);
};
