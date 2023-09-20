import { TagOrganization as TTagOrganization } from "../api/tagOrganization/TagOrganization";

export const TAGORGANIZATION_TITLE_FIELD = "id";

export const TagOrganizationTitle = (record: TTagOrganization): string => {
  return record.id?.toString() || String(record.id);
};
