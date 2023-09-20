import { ProductVariant } from "../productVariant/ProductVariant";
import { ProductOption } from "../productOption/ProductOption";

export type ProductVariantOptionsProductOption = {
  productVariant?: ProductVariant;
  productOption?: ProductOption;
  id: string;
};
