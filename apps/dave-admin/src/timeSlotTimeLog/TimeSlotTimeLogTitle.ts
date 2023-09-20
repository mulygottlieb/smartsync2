import { TimeSlotTimeLog as TTimeSlotTimeLog } from "../api/timeSlotTimeLog/TimeSlotTimeLog";

export const TIMESLOTTIMELOG_TITLE_FIELD = "id";

export const TimeSlotTimeLogTitle = (record: TTimeSlotTimeLog): string => {
  return record.id?.toString() || String(record.id);
};
