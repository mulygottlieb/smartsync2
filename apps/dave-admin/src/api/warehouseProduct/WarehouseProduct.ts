import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";
import { Warehouse } from "../warehouse/Warehouse";
import { Organization } from "../organization/Organization";
import { WarehouseProductVariant } from "../warehouseProductVariant/WarehouseProductVariant";

export type WarehouseProduct = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: Decimal | null;
  product?: Product;
  tenant?: Tenant | null;
  warehouse?: Warehouse;
  organization?: Organization | null;
  warehouseProductVariant?: Array<WarehouseProductVariant>;
};
