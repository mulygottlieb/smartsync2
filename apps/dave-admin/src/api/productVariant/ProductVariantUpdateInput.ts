import { ProductVariantPriceWhereUniqueInput } from "../productVariantPrice/ProductVariantPriceWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantSettingWhereUniqueInput } from "../productVariantSetting/ProductVariantSettingWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductVariantOptionsProductOptionUpdateManyWithoutProductVariantsInput } from "./ProductVariantOptionsProductOptionUpdateManyWithoutProductVariantsInput";
import { WarehouseProductVariantUpdateManyWithoutProductVariantsInput } from "./WarehouseProductVariantUpdateManyWithoutProductVariantsInput";

export type ProductVariantUpdateInput = {
  taxes?: number;
  notes?: string | null;
  quantity?: number;
  billingInvoicingPolicy?: string;
  internalReference?: string | null;
  enabled?: boolean;
  productVariantPriceProductVariantPriceIdToproductVariantPrice?: ProductVariantPriceWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productVariantSettingProductVariantSettingIdToproductVariantSetting?: ProductVariantSettingWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  productVariantOptionsProductOption?: ProductVariantOptionsProductOptionUpdateManyWithoutProductVariantsInput;
  productVariantPriceProductVariantPriceProductVariantIdToproductVariant?: ProductVariantPriceWhereUniqueInput | null;
  productVariantSettingProductVariantSettingProductVariantIdToproductVariant?: ProductVariantSettingWhereUniqueInput | null;
  warehouseProductVariant?: WarehouseProductVariantUpdateManyWithoutProductVariantsInput;
};
