import { SkillOrganization as TSkillOrganization } from "../api/skillOrganization/SkillOrganization";

export const SKILLORGANIZATION_TITLE_FIELD = "id";

export const SkillOrganizationTitle = (record: TSkillOrganization): string => {
  return record.id?.toString() || String(record.id);
};
