import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { ProductOptionWhereUniqueInput } from "../productOption/ProductOptionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProductVariantOptionsProductOptionWhereInput = {
  productVariant?: ProductVariantWhereUniqueInput;
  productOption?: ProductOptionWhereUniqueInput;
  id?: StringFilter;
};
