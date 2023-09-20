import { SortOrder } from "../../util/SortOrder";

export type ProductVariantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  taxes?: SortOrder;
  notes?: SortOrder;
  quantity?: SortOrder;
  billingInvoicingPolicy?: SortOrder;
  internalReference?: SortOrder;
  enabled?: SortOrder;
  priceId?: SortOrder;
  organizationId?: SortOrder;
  productId?: SortOrder;
  tenantId?: SortOrder;
  settingId?: SortOrder;
  imageId?: SortOrder;
  productVariantPriceProductVariantPriceProductVariantIdToproductVariantId?: SortOrder;
  productVariantSettingProductVariantSettingProductVariantIdToproductVariantId?: SortOrder;
};
