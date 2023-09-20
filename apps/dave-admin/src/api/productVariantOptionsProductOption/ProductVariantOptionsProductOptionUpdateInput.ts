import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { ProductOptionWhereUniqueInput } from "../productOption/ProductOptionWhereUniqueInput";

export type ProductVariantOptionsProductOptionUpdateInput = {
  productVariant?: ProductVariantWhereUniqueInput;
  productOption?: ProductOptionWhereUniqueInput;
};
