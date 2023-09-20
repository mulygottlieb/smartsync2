import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type WarehouseMerchantUpdateInput = {
  merchant?: MerchantWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
};
