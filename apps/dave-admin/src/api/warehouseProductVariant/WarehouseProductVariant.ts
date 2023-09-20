import { Decimal } from "decimal.js";
import { WarehouseProduct } from "../warehouseProduct/WarehouseProduct";
import { Tenant } from "../tenant/Tenant";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Organization } from "../organization/Organization";

export type WarehouseProductVariant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: Decimal | null;
  warehouseProduct?: WarehouseProduct;
  tenant?: Tenant | null;
  productVariant?: ProductVariant;
  organization?: Organization | null;
};
