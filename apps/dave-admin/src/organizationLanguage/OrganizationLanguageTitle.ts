import { OrganizationLanguage as TOrganizationLanguage } from "../api/organizationLanguage/OrganizationLanguage";

export const ORGANIZATIONLANGUAGE_TITLE_FIELD = "name";

export const OrganizationLanguageTitle = (
  record: TOrganizationLanguage
): string => {
  return record.name?.toString() || String(record.id);
};
