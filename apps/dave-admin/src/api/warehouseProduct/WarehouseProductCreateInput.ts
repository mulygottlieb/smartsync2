import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { WarehouseProductVariantCreateNestedManyWithoutWarehouseProductsInput } from "./WarehouseProductVariantCreateNestedManyWithoutWarehouseProductsInput";

export type WarehouseProductCreateInput = {
  quantity?: Decimal | null;
  product: ProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  warehouse: WarehouseWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  warehouseProductVariant?: WarehouseProductVariantCreateNestedManyWithoutWarehouseProductsInput;
};
