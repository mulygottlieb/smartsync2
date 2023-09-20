import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductOptionGroupWhereUniqueInput } from "../productOptionGroup/ProductOptionGroupWhereUniqueInput";
import { ProductOptionTranslationCreateNestedManyWithoutProductOptionsInput } from "./ProductOptionTranslationCreateNestedManyWithoutProductOptionsInput";
import { ProductVariantOptionsProductOptionCreateNestedManyWithoutProductOptionsInput } from "./ProductVariantOptionsProductOptionCreateNestedManyWithoutProductOptionsInput";

export type ProductOptionCreateInput = {
  name: string;
  code?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productOptionGroup: ProductOptionGroupWhereUniqueInput;
  productOptionTranslation?: ProductOptionTranslationCreateNestedManyWithoutProductOptionsInput;
  productVariantOptionsProductOption?: ProductVariantOptionsProductOptionCreateNestedManyWithoutProductOptionsInput;
};
