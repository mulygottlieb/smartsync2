import { TagEmployee as TTagEmployee } from "../api/tagEmployee/TagEmployee";

export const TAGEMPLOYEE_TITLE_FIELD = "id";

export const TagEmployeeTitle = (record: TTagEmployee): string => {
  return record.id?.toString() || String(record.id);
};
