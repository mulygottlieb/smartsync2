import { OrganizationEmploymentTypeEmployee as TOrganizationEmploymentTypeEmployee } from "../api/organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployee";

export const ORGANIZATIONEMPLOYMENTTYPEEMPLOYEE_TITLE_FIELD = "id";

export const OrganizationEmploymentTypeEmployeeTitle = (
  record: TOrganizationEmploymentTypeEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
