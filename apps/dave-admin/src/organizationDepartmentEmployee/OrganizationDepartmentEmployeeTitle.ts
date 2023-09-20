import { OrganizationDepartmentEmployee as TOrganizationDepartmentEmployee } from "../api/organizationDepartmentEmployee/OrganizationDepartmentEmployee";

export const ORGANIZATIONDEPARTMENTEMPLOYEE_TITLE_FIELD = "id";

export const OrganizationDepartmentEmployeeTitle = (
  record: TOrganizationDepartmentEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
