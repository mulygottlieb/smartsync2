import { OrganizationTeam as TOrganizationTeam } from "../api/organizationTeam/OrganizationTeam";

export const ORGANIZATIONTEAM_TITLE_FIELD = "name";

export const OrganizationTeamTitle = (record: TOrganizationTeam): string => {
  return record.name?.toString() || String(record.id);
};
