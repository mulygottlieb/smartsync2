import { TimeLogWhereUniqueInput } from "../timeLog/TimeLogWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TimeSlotTimeLogWhereInput = {
  timeLog?: TimeLogWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
  id?: StringFilter;
};
