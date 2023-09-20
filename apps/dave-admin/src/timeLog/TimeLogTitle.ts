import { TimeLog as TTimeLog } from "../api/timeLog/TimeLog";

export const TIMELOG_TITLE_FIELD = "logType";

export const TimeLogTitle = (record: TTimeLog): string => {
  return record.logType?.toString() || String(record.id);
};
