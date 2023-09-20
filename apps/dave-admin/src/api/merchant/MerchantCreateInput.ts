import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { TagMerchantCreateNestedManyWithoutMerchantsInput } from "./TagMerchantCreateNestedManyWithoutMerchantsInput";
import { WarehouseMerchantCreateNestedManyWithoutMerchantsInput } from "./WarehouseMerchantCreateNestedManyWithoutMerchantsInput";

export type MerchantCreateInput = {
  name: string;
  code: string;
  email: string;
  phone?: string | null;
  description?: string | null;
  active: boolean;
  currency: string;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  contact?: ContactWhereUniqueInput | null;
  tagMerchant?: TagMerchantCreateNestedManyWithoutMerchantsInput;
  warehouseMerchant?: WarehouseMerchantCreateNestedManyWithoutMerchantsInput;
};
