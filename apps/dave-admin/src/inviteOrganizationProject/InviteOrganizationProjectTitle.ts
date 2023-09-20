import { InviteOrganizationProject as TInviteOrganizationProject } from "../api/inviteOrganizationProject/InviteOrganizationProject";

export const INVITEORGANIZATIONPROJECT_TITLE_FIELD = "id";

export const InviteOrganizationProjectTitle = (
  record: TInviteOrganizationProject
): string => {
  return record.id?.toString() || String(record.id);
};
