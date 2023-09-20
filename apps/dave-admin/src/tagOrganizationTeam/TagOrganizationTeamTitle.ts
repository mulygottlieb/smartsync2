import { TagOrganizationTeam as TTagOrganizationTeam } from "../api/tagOrganizationTeam/TagOrganizationTeam";

export const TAGORGANIZATIONTEAM_TITLE_FIELD = "id";

export const TagOrganizationTeamTitle = (
  record: TTagOrganizationTeam
): string => {
  return record.id?.toString() || String(record.id);
};
