import { TagOrganizationEmploymentType as TTagOrganizationEmploymentType } from "../api/tagOrganizationEmploymentType/TagOrganizationEmploymentType";

export const TAGORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD = "id";

export const TagOrganizationEmploymentTypeTitle = (
  record: TTagOrganizationEmploymentType
): string => {
  return record.id?.toString() || String(record.id);
};
