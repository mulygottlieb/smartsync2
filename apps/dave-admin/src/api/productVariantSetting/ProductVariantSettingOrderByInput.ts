import { SortOrder } from "../../util/SortOrder";

export type ProductVariantSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isSubscription?: SortOrder;
  isPurchaseAutomatically?: SortOrder;
  canBeSold?: SortOrder;
  canBePurchased?: SortOrder;
  canBeCharged?: SortOrder;
  canBeRented?: SortOrder;
  isEquipment?: SortOrder;
  trackInventory?: SortOrder;
  tenantId?: SortOrder;
  productVariantId?: SortOrder;
  organizationId?: SortOrder;
  productVariantProductVariantSettingIdToproductVariantSettingId?: SortOrder;
};
