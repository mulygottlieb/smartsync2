import { Decimal } from "decimal.js";
import { WarehouseProductWhereUniqueInput } from "../warehouseProduct/WarehouseProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type WarehouseProductVariantCreateInput = {
  quantity?: Decimal | null;
  warehouseProduct: WarehouseProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  productVariant: ProductVariantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
};
