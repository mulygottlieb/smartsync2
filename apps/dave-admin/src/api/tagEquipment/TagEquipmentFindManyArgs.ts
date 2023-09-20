import { TagEquipmentWhereInput } from "./TagEquipmentWhereInput";
import { TagEquipmentOrderByInput } from "./TagEquipmentOrderByInput";

export type TagEquipmentFindManyArgs = {
  where?: TagEquipmentWhereInput;
  orderBy?: Array<TagEquipmentOrderByInput>;
  skip?: number;
  take?: number;
};
