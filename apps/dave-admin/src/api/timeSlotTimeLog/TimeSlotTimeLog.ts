import { TimeLog } from "../timeLog/TimeLog";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type TimeSlotTimeLog = {
  timeLog?: TimeLog;
  timeSlot?: TimeSlot;
  id: string;
};
