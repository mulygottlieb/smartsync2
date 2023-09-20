import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type WarehouseMerchantWhereInput = {
  merchant?: MerchantWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
  id?: StringFilter;
};
