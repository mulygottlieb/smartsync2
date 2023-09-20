import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { ProductOptionWhereUniqueInput } from "../productOption/ProductOptionWhereUniqueInput";

export type ProductVariantOptionsProductOptionCreateInput = {
  productVariant: ProductVariantWhereUniqueInput;
  productOption: ProductOptionWhereUniqueInput;
};
