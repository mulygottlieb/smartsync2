import { TagOrganizationDepartment as TTagOrganizationDepartment } from "../api/tagOrganizationDepartment/TagOrganizationDepartment";

export const TAGORGANIZATIONDEPARTMENT_TITLE_FIELD = "id";

export const TagOrganizationDepartmentTitle = (
  record: TTagOrganizationDepartment
): string => {
  return record.id?.toString() || String(record.id);
};
