import { ImageAsset } from "../imageAsset/ImageAsset";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Contact } from "../contact/Contact";
import { TagMerchant } from "../tagMerchant/TagMerchant";
import { WarehouseMerchant } from "../warehouseMerchant/WarehouseMerchant";

export type Merchant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string;
  email: string;
  phone: string | null;
  description: string | null;
  active: boolean;
  currency: string;
  imageAsset?: ImageAsset | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  contact?: Contact | null;
  tagMerchant?: Array<TagMerchant>;
  warehouseMerchant?: Array<WarehouseMerchant>;
};
