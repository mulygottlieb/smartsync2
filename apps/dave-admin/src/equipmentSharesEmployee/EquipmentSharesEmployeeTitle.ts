import { EquipmentSharesEmployee as TEquipmentSharesEmployee } from "../api/equipmentSharesEmployee/EquipmentSharesEmployee";

export const EQUIPMENTSHARESEMPLOYEE_TITLE_FIELD = "id";

export const EquipmentSharesEmployeeTitle = (
  record: TEquipmentSharesEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
