import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductOptionGroupWhereUniqueInput } from "../productOptionGroup/ProductOptionGroupWhereUniqueInput";
import { ProductOptionTranslationUpdateManyWithoutProductOptionsInput } from "./ProductOptionTranslationUpdateManyWithoutProductOptionsInput";
import { ProductVariantOptionsProductOptionUpdateManyWithoutProductOptionsInput } from "./ProductVariantOptionsProductOptionUpdateManyWithoutProductOptionsInput";

export type ProductOptionUpdateInput = {
  name?: string;
  code?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productOptionGroup?: ProductOptionGroupWhereUniqueInput;
  productOptionTranslation?: ProductOptionTranslationUpdateManyWithoutProductOptionsInput;
  productVariantOptionsProductOption?: ProductVariantOptionsProductOptionUpdateManyWithoutProductOptionsInput;
};
