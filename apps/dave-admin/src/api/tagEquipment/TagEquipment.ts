import { Tag } from "../tag/Tag";
import { Equipment } from "../equipment/Equipment";

export type TagEquipment = {
  tag?: Tag;
  equipment?: Equipment;
  id: string;
};
