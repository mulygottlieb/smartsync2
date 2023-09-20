import { OrganizationEmploymentType as TOrganizationEmploymentType } from "../api/organizationEmploymentType/OrganizationEmploymentType";

export const ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD = "name";

export const OrganizationEmploymentTypeTitle = (
  record: TOrganizationEmploymentType
): string => {
  return record.name?.toString() || String(record.id);
};
