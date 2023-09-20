import { EmailReset as TEmailReset } from "../api/emailReset/EmailReset";

export const EMAILRESET_TITLE_FIELD = "email";

export const EmailResetTitle = (record: TEmailReset): string => {
  return record.email?.toString() || String(record.id);
};
