import { EquipmentSharesTeam as TEquipmentSharesTeam } from "../api/equipmentSharesTeam/EquipmentSharesTeam";

export const EQUIPMENTSHARESTEAM_TITLE_FIELD = "id";

export const EquipmentSharesTeamTitle = (
  record: TEquipmentSharesTeam
): string => {
  return record.id?.toString() || String(record.id);
};
