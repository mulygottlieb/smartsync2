import { OrganizationTeamEmployee as TOrganizationTeamEmployee } from "../api/organizationTeamEmployee/OrganizationTeamEmployee";

export const ORGANIZATIONTEAMEMPLOYEE_TITLE_FIELD = "id";

export const OrganizationTeamEmployeeTitle = (
  record: TOrganizationTeamEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
