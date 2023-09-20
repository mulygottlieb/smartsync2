import { OrganizationDepartment as TOrganizationDepartment } from "../api/organizationDepartment/OrganizationDepartment";

export const ORGANIZATIONDEPARTMENT_TITLE_FIELD = "name";

export const OrganizationDepartmentTitle = (
  record: TOrganizationDepartment
): string => {
  return record.name?.toString() || String(record.id);
};
