import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductVariantPriceWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  unitCost?: IntFilter;
  unitCostCurrency?: StringFilter;
  retailPrice?: IntFilter;
  retailPriceCurrency?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  productVariantProductVariantPriceProductVariantIdToproductVariant?: ProductVariantWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  productVariantProductVariantPriceIdToproductVariantPrice?: ProductVariantWhereUniqueInput;
};
