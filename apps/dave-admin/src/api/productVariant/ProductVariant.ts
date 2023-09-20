import { ProductVariantPrice } from "../productVariantPrice/ProductVariantPrice";
import { Organization } from "../organization/Organization";
import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";
import { ProductVariantSetting } from "../productVariantSetting/ProductVariantSetting";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { ProductVariantOptionsProductOption } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOption";
import { WarehouseProductVariant } from "../warehouseProductVariant/WarehouseProductVariant";

export type ProductVariant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  taxes: number;
  notes: string | null;
  quantity: number;
  billingInvoicingPolicy: string;
  internalReference: string | null;
  enabled: boolean;
  productVariantPriceProductVariantPriceIdToproductVariantPrice?: ProductVariantPrice | null;
  organization?: Organization | null;
  product?: Product | null;
  tenant?: Tenant | null;
  productVariantSettingProductVariantSettingIdToproductVariantSetting?: ProductVariantSetting | null;
  imageAsset?: ImageAsset | null;
  productVariantOptionsProductOption?: Array<ProductVariantOptionsProductOption>;
  productVariantPriceProductVariantPriceProductVariantIdToproductVariant?: ProductVariantPrice | null;
  productVariantSettingProductVariantSettingProductVariantIdToproductVariant?: ProductVariantSetting | null;
  warehouseProductVariant?: Array<WarehouseProductVariant>;
};
