import { OrganizationContact as TOrganizationContact } from "../api/organizationContact/OrganizationContact";

export const ORGANIZATIONCONTACT_TITLE_FIELD = "name";

export const OrganizationContactTitle = (
  record: TOrganizationContact
): string => {
  return record.name?.toString() || String(record.id);
};
