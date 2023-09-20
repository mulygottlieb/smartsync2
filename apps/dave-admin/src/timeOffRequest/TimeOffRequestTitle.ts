import { TimeOffRequest as TTimeOffRequest } from "../api/timeOffRequest/TimeOffRequest";

export const TIMEOFFREQUEST_TITLE_FIELD = "documentUrl";

export const TimeOffRequestTitle = (record: TTimeOffRequest): string => {
  return record.documentUrl?.toString() || String(record.id);
};
