import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { ProductOptionGroup } from "../productOptionGroup/ProductOptionGroup";
import { ProductOptionTranslation } from "../productOptionTranslation/ProductOptionTranslation";
import { ProductVariantOptionsProductOption } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOption";

export type ProductOption = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  productOptionGroup?: ProductOptionGroup;
  productOptionTranslation?: Array<ProductOptionTranslation>;
  productVariantOptionsProductOption?: Array<ProductVariantOptionsProductOption>;
};
