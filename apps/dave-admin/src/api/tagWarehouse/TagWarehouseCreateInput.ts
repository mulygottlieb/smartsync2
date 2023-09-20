import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagWarehouseCreateInput = {
  warehouse: WarehouseWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
