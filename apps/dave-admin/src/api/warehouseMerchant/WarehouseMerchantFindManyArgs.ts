import { WarehouseMerchantWhereInput } from "./WarehouseMerchantWhereInput";
import { WarehouseMerchantOrderByInput } from "./WarehouseMerchantOrderByInput";

export type WarehouseMerchantFindManyArgs = {
  where?: WarehouseMerchantWhereInput;
  orderBy?: Array<WarehouseMerchantOrderByInput>;
  skip?: number;
  take?: number;
};
