import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type WarehouseMerchantCreateInput = {
  merchant: MerchantWhereUniqueInput;
  warehouse: WarehouseWhereUniqueInput;
};
