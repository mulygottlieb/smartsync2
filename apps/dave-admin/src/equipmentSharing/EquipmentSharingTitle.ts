import { EquipmentSharing as TEquipmentSharing } from "../api/equipmentSharing/EquipmentSharing";

export const EQUIPMENTSHARING_TITLE_FIELD = "name";

export const EquipmentSharingTitle = (record: TEquipmentSharing): string => {
  return record.name?.toString() || String(record.id);
};
