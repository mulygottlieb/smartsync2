import { SkillEmployee as TSkillEmployee } from "../api/skillEmployee/SkillEmployee";

export const SKILLEMPLOYEE_TITLE_FIELD = "id";

export const SkillEmployeeTitle = (record: TSkillEmployee): string => {
  return record.id?.toString() || String(record.id);
};
