import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../equipment/EquipmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagEquipmentWhereInput = {
  tag?: TagWhereUniqueInput;
  equipment?: EquipmentWhereUniqueInput;
  id?: StringFilter;
};
