import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ProductVariantSettingUpdateInput = {
  isSubscription?: boolean;
  isPurchaseAutomatically?: boolean;
  canBeSold?: boolean;
  canBePurchased?: boolean;
  canBeCharged?: boolean;
  canBeRented?: boolean;
  isEquipment?: boolean;
  trackInventory?: boolean;
  tenant?: TenantWhereUniqueInput | null;
  productVariantProductVariantSettingProductVariantIdToproductVariant?: ProductVariantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  productVariantProductVariantSettingIdToproductVariantSetting?: ProductVariantWhereUniqueInput | null;
};
