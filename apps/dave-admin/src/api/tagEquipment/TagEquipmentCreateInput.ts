import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EquipmentWhereUniqueInput } from "../equipment/EquipmentWhereUniqueInput";

export type TagEquipmentCreateInput = {
  tag: TagWhereUniqueInput;
  equipment: EquipmentWhereUniqueInput;
};
