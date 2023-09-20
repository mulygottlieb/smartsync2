import { OrganizationTeamJoinRequest as TOrganizationTeamJoinRequest } from "../api/organizationTeamJoinRequest/OrganizationTeamJoinRequest";

export const ORGANIZATIONTEAMJOINREQUEST_TITLE_FIELD = "fullName";

export const OrganizationTeamJoinRequestTitle = (
  record: TOrganizationTeamJoinRequest
): string => {
  return record.fullName?.toString() || String(record.id);
};
