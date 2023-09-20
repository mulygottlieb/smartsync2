import { Contact } from "../contact/Contact";
import { Tenant } from "../tenant/Tenant";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { Organization } from "../organization/Organization";
import { TagWarehouse } from "../tagWarehouse/TagWarehouse";
import { WarehouseMerchant } from "../warehouseMerchant/WarehouseMerchant";
import { WarehouseProduct } from "../warehouseProduct/WarehouseProduct";

export type Warehouse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string;
  email: string;
  description: string | null;
  active: boolean;
  contact?: Contact | null;
  tenant?: Tenant | null;
  imageAsset?: ImageAsset | null;
  organization?: Organization | null;
  tagWarehouse?: Array<TagWarehouse>;
  warehouseMerchant?: Array<WarehouseMerchant>;
  warehouseProduct?: Array<WarehouseProduct>;
};
