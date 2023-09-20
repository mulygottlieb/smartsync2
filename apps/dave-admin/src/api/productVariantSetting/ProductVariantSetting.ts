import { Tenant } from "../tenant/Tenant";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Organization } from "../organization/Organization";

export type ProductVariantSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isSubscription: boolean;
  isPurchaseAutomatically: boolean;
  canBeSold: boolean;
  canBePurchased: boolean;
  canBeCharged: boolean;
  canBeRented: boolean;
  isEquipment: boolean;
  trackInventory: boolean;
  tenant?: Tenant | null;
  productVariantProductVariantSettingProductVariantIdToproductVariant?: ProductVariant | null;
  organization?: Organization | null;
  productVariantProductVariantSettingIdToproductVariantSetting?: ProductVariant | null;
};
