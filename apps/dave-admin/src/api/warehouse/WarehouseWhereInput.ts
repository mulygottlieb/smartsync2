import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWarehouseListRelationFilter } from "../tagWarehouse/TagWarehouseListRelationFilter";
import { WarehouseMerchantListRelationFilter } from "../warehouseMerchant/WarehouseMerchantListRelationFilter";
import { WarehouseProductListRelationFilter } from "../warehouseProduct/WarehouseProductListRelationFilter";

export type WarehouseWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  code?: StringFilter;
  email?: StringFilter;
  description?: StringNullableFilter;
  active?: BooleanFilter;
  contact?: ContactWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  imageAsset?: ImageAssetWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tagWarehouse?: TagWarehouseListRelationFilter;
  warehouseMerchant?: WarehouseMerchantListRelationFilter;
  warehouseProduct?: WarehouseProductListRelationFilter;
};
