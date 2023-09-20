import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductVariantPriceWhereUniqueInput } from "../productVariantPrice/ProductVariantPriceWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantSettingWhereUniqueInput } from "../productVariantSetting/ProductVariantSettingWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductVariantOptionsProductOptionListRelationFilter } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOptionListRelationFilter";
import { WarehouseProductVariantListRelationFilter } from "../warehouseProductVariant/WarehouseProductVariantListRelationFilter";

export type ProductVariantWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  taxes?: IntFilter;
  notes?: StringNullableFilter;
  quantity?: IntFilter;
  billingInvoicingPolicy?: StringFilter;
  internalReference?: StringNullableFilter;
  enabled?: BooleanFilter;
  productVariantPriceProductVariantPriceIdToproductVariantPrice?: ProductVariantPriceWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  productVariantSettingProductVariantSettingIdToproductVariantSetting?: ProductVariantSettingWhereUniqueInput;
  imageAsset?: ImageAssetWhereUniqueInput;
  productVariantOptionsProductOption?: ProductVariantOptionsProductOptionListRelationFilter;
  productVariantPriceProductVariantPriceProductVariantIdToproductVariant?: ProductVariantPriceWhereUniqueInput;
  productVariantSettingProductVariantSettingProductVariantIdToproductVariant?: ProductVariantSettingWhereUniqueInput;
  warehouseProductVariant?: WarehouseProductVariantListRelationFilter;
};
