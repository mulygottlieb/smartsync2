import { InviteOrganizationContact as TInviteOrganizationContact } from "../api/inviteOrganizationContact/InviteOrganizationContact";

export const INVITEORGANIZATIONCONTACT_TITLE_FIELD = "id";

export const InviteOrganizationContactTitle = (
  record: TInviteOrganizationContact
): string => {
  return record.id?.toString() || String(record.id);
};
