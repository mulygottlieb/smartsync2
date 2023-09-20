import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { WarehouseProductWhereUniqueInput } from "../warehouseProduct/WarehouseProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type WarehouseProductVariantWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  quantity?: DecimalNullableFilter;
  warehouseProduct?: WarehouseProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  productVariant?: ProductVariantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
