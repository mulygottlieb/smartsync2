import { TagEquipment as TTagEquipment } from "../api/tagEquipment/TagEquipment";

export const TAGEQUIPMENT_TITLE_FIELD = "id";

export const TagEquipmentTitle = (record: TTagEquipment): string => {
  return record.id?.toString() || String(record.id);
};
