import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagWarehouseWhereInput = {
  warehouse?: WarehouseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
