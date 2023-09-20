import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductVariantPriceUpdateInput = {
  unitCost?: number;
  unitCostCurrency?: string;
  retailPrice?: number;
  retailPriceCurrency?: string;
  organization?: OrganizationWhereUniqueInput | null;
  productVariantProductVariantPriceProductVariantIdToproductVariant?: ProductVariantWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productVariantProductVariantPriceIdToproductVariantPrice?: ProductVariantWhereUniqueInput | null;
};
