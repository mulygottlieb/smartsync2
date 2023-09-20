import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { TagMerchantListRelationFilter } from "../tagMerchant/TagMerchantListRelationFilter";
import { WarehouseMerchantListRelationFilter } from "../warehouseMerchant/WarehouseMerchantListRelationFilter";

export type MerchantWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  code?: StringFilter;
  email?: StringFilter;
  phone?: StringNullableFilter;
  description?: StringNullableFilter;
  active?: BooleanFilter;
  currency?: StringFilter;
  imageAsset?: ImageAssetWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  contact?: ContactWhereUniqueInput;
  tagMerchant?: TagMerchantListRelationFilter;
  warehouseMerchant?: WarehouseMerchantListRelationFilter;
};
