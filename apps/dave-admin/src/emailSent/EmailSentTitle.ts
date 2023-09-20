import { EmailSent as TEmailSent } from "../api/emailSent/EmailSent";

export const EMAILSENT_TITLE_FIELD = "name";

export const EmailSentTitle = (record: TEmailSent): string => {
  return record.name?.toString() || String(record.id);
};
