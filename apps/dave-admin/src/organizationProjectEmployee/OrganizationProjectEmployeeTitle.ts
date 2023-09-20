import { OrganizationProjectEmployee as TOrganizationProjectEmployee } from "../api/organizationProjectEmployee/OrganizationProjectEmployee";

export const ORGANIZATIONPROJECTEMPLOYEE_TITLE_FIELD = "id";

export const OrganizationProjectEmployeeTitle = (
  record: TOrganizationProjectEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
