import { InviteOrganizationTeam as TInviteOrganizationTeam } from "../api/inviteOrganizationTeam/InviteOrganizationTeam";

export const INVITEORGANIZATIONTEAM_TITLE_FIELD = "id";

export const InviteOrganizationTeamTitle = (
  record: TInviteOrganizationTeam
): string => {
  return record.id?.toString() || String(record.id);
};
