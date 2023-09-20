import { WarehouseProductVariantWhereInput } from "./WarehouseProductVariantWhereInput";
import { WarehouseProductVariantOrderByInput } from "./WarehouseProductVariantOrderByInput";

export type WarehouseProductVariantFindManyArgs = {
  where?: WarehouseProductVariantWhereInput;
  orderBy?: Array<WarehouseProductVariantOrderByInput>;
  skip?: number;
  take?: number;
};
