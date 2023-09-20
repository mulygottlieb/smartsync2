import { TagEmployeeLevel as TTagEmployeeLevel } from "../api/tagEmployeeLevel/TagEmployeeLevel";

export const TAGEMPLOYEELEVEL_TITLE_FIELD = "id";

export const TagEmployeeLevelTitle = (record: TTagEmployeeLevel): string => {
  return record.id?.toString() || String(record.id);
};
