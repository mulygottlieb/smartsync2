import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWarehouseCreateNestedManyWithoutWarehousesInput } from "./TagWarehouseCreateNestedManyWithoutWarehousesInput";
import { WarehouseMerchantCreateNestedManyWithoutWarehousesInput } from "./WarehouseMerchantCreateNestedManyWithoutWarehousesInput";
import { WarehouseProductCreateNestedManyWithoutWarehousesInput } from "./WarehouseProductCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  name: string;
  code: string;
  email: string;
  description?: string | null;
  active: boolean;
  contact?: ContactWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tagWarehouse?: TagWarehouseCreateNestedManyWithoutWarehousesInput;
  warehouseMerchant?: WarehouseMerchantCreateNestedManyWithoutWarehousesInput;
  warehouseProduct?: WarehouseProductCreateNestedManyWithoutWarehousesInput;
};
