import { Invite as TInvite } from "../api/invite/Invite";

export const INVITE_TITLE_FIELD = "fullName";

export const InviteTitle = (record: TInvite): string => {
  return record.fullName?.toString() || String(record.id);
};
