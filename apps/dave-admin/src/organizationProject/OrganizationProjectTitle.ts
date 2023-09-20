import { OrganizationProject as TOrganizationProject } from "../api/organizationProject/OrganizationProject";

export const ORGANIZATIONPROJECT_TITLE_FIELD = "name";

export const OrganizationProjectTitle = (
  record: TOrganizationProject
): string => {
  return record.name?.toString() || String(record.id);
};
