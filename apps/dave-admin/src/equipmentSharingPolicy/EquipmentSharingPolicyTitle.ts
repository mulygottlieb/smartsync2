import { EquipmentSharingPolicy as TEquipmentSharingPolicy } from "../api/equipmentSharingPolicy/EquipmentSharingPolicy";

export const EQUIPMENTSHARINGPOLICY_TITLE_FIELD = "name";

export const EquipmentSharingPolicyTitle = (
  record: TEquipmentSharingPolicy
): string => {
  return record.name?.toString() || String(record.id);
};
