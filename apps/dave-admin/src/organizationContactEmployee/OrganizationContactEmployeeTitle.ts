import { OrganizationContactEmployee as TOrganizationContactEmployee } from "../api/organizationContactEmployee/OrganizationContactEmployee";

export const ORGANIZATIONCONTACTEMPLOYEE_TITLE_FIELD = "id";

export const OrganizationContactEmployeeTitle = (
  record: TOrganizationContactEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
