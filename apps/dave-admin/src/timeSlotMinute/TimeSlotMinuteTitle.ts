import { TimeSlotMinute as TTimeSlotMinute } from "../api/timeSlotMinute/TimeSlotMinute";

export const TIMESLOTMINUTE_TITLE_FIELD = "id";

export const TimeSlotMinuteTitle = (record: TTimeSlotMinute): string => {
  return record.id?.toString() || String(record.id);
};
