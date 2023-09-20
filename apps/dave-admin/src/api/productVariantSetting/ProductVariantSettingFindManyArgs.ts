import { ProductVariantSettingWhereInput } from "./ProductVariantSettingWhereInput";
import { ProductVariantSettingOrderByInput } from "./ProductVariantSettingOrderByInput";

export type ProductVariantSettingFindManyArgs = {
  where?: ProductVariantSettingWhereInput;
  orderBy?: Array<ProductVariantSettingOrderByInput>;
  skip?: number;
  take?: number;
};
