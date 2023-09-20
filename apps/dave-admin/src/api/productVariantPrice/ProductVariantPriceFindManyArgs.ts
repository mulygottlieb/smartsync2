import { ProductVariantPriceWhereInput } from "./ProductVariantPriceWhereInput";
import { ProductVariantPriceOrderByInput } from "./ProductVariantPriceOrderByInput";

export type ProductVariantPriceFindManyArgs = {
  where?: ProductVariantPriceWhereInput;
  orderBy?: Array<ProductVariantPriceOrderByInput>;
  skip?: number;
  take?: number;
};
