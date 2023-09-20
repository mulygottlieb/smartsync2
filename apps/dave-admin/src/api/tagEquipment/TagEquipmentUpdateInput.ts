import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../equipment/EquipmentWhereUniqueInput";

export type TagEquipmentUpdateInput = {
  tag?: TagWhereUniqueInput;
  equipment?: EquipmentWhereUniqueInput;
};
