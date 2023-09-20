import { WarehouseProductWhereInput } from "./WarehouseProductWhereInput";
import { WarehouseProductOrderByInput } from "./WarehouseProductOrderByInput";

export type WarehouseProductFindManyArgs = {
  where?: WarehouseProductWhereInput;
  orderBy?: Array<WarehouseProductOrderByInput>;
  skip?: number;
  take?: number;
};
