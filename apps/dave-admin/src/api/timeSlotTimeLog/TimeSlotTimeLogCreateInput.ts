import { TimeLogWhereUniqueInput } from "../timeLog/TimeLogWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type TimeSlotTimeLogCreateInput = {
  timeLog: TimeLogWhereUniqueInput;
  timeSlot: TimeSlotWhereUniqueInput;
};
