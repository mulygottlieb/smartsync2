import { TagOrganizationProject as TTagOrganizationProject } from "../api/tagOrganizationProject/TagOrganizationProject";

export const TAGORGANIZATIONPROJECT_TITLE_FIELD = "id";

export const TagOrganizationProjectTitle = (
  record: TTagOrganizationProject
): string => {
  return record.id?.toString() || String(record.id);
};
