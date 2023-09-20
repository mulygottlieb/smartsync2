import { OrganizationSprint as TOrganizationSprint } from "../api/organizationSprint/OrganizationSprint";

export const ORGANIZATIONSPRINT_TITLE_FIELD = "name";

export const OrganizationSprintTitle = (
  record: TOrganizationSprint
): string => {
  return record.name?.toString() || String(record.id);
};
