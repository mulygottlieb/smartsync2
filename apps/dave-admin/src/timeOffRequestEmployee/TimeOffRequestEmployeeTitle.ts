import { TimeOffRequestEmployee as TTimeOffRequestEmployee } from "../api/timeOffRequestEmployee/TimeOffRequestEmployee";

export const TIMEOFFREQUESTEMPLOYEE_TITLE_FIELD = "id";

export const TimeOffRequestEmployeeTitle = (
  record: TTimeOffRequestEmployee
): string => {
  return record.id?.toString() || String(record.id);
};
