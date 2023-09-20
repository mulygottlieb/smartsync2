import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { WarehouseProductVariantListRelationFilter } from "../warehouseProductVariant/WarehouseProductVariantListRelationFilter";

export type WarehouseProductWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  quantity?: DecimalNullableFilter;
  product?: ProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  warehouseProductVariant?: WarehouseProductVariantListRelationFilter;
};
