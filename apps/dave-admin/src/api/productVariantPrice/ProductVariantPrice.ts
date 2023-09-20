import { Organization } from "../organization/Organization";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Tenant } from "../tenant/Tenant";

export type ProductVariantPrice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  unitCost: number;
  unitCostCurrency: string;
  retailPrice: number;
  retailPriceCurrency: string;
  organization?: Organization | null;
  productVariantProductVariantPriceProductVariantIdToproductVariant?: ProductVariant | null;
  tenant?: Tenant | null;
  productVariantProductVariantPriceIdToproductVariantPrice?: ProductVariant | null;
};
