import { CustomSmtp as TCustomSmtp } from "../api/customSmtp/CustomSmtp";

export const CUSTOMSMTP_TITLE_FIELD = "username";

export const CustomSmtpTitle = (record: TCustomSmtp): string => {
  return record.username?.toString() || String(record.id);
};
