import { TagUser as TTagUser } from "../api/tagUser/TagUser";

export const TAGUSER_TITLE_FIELD = "id";

export const TagUserTitle = (record: TTagUser): string => {
  return record.id?.toString() || String(record.id);
};
