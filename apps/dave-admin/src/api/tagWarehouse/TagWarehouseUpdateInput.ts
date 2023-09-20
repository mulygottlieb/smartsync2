import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagWarehouseUpdateInput = {
  warehouse?: WarehouseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
