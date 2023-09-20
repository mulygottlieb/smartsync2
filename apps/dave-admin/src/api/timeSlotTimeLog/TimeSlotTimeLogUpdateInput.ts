import { TimeLogWhereUniqueInput } from "../timeLog/TimeLogWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type TimeSlotTimeLogUpdateInput = {
  timeLog?: TimeLogWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
};
