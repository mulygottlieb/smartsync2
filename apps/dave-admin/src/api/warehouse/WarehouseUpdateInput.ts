import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TagWarehouseUpdateManyWithoutWarehousesInput } from "./TagWarehouseUpdateManyWithoutWarehousesInput";
import { WarehouseMerchantUpdateManyWithoutWarehousesInput } from "./WarehouseMerchantUpdateManyWithoutWarehousesInput";
import { WarehouseProductUpdateManyWithoutWarehousesInput } from "./WarehouseProductUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  name?: string;
  code?: string;
  email?: string;
  description?: string | null;
  active?: boolean;
  contact?: ContactWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tagWarehouse?: TagWarehouseUpdateManyWithoutWarehousesInput;
  warehouseMerchant?: WarehouseMerchantUpdateManyWithoutWarehousesInput;
  warehouseProduct?: WarehouseProductUpdateManyWithoutWarehousesInput;
};
