import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ProductVariantSettingWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  isSubscription?: BooleanFilter;
  isPurchaseAutomatically?: BooleanFilter;
  canBeSold?: BooleanFilter;
  canBePurchased?: BooleanFilter;
  canBeCharged?: BooleanFilter;
  canBeRented?: BooleanFilter;
  isEquipment?: BooleanFilter;
  trackInventory?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  productVariantProductVariantSettingProductVariantIdToproductVariant?: ProductVariantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  productVariantProductVariantSettingIdToproductVariantSetting?: ProductVariantWhereUniqueInput;
};
