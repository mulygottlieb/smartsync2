import { Timesheet as TTimesheet } from "../api/timesheet/Timesheet";

export const TIMESHEET_TITLE_FIELD = "status";

export const TimesheetTitle = (record: TTimesheet): string => {
  return record.status?.toString() || String(record.id);
};
