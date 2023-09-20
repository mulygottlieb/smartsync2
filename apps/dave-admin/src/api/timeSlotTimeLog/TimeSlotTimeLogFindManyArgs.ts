import { TimeSlotTimeLogWhereInput } from "./TimeSlotTimeLogWhereInput";
import { TimeSlotTimeLogOrderByInput } from "./TimeSlotTimeLogOrderByInput";

export type TimeSlotTimeLogFindManyArgs = {
  where?: TimeSlotTimeLogWhereInput;
  orderBy?: Array<TimeSlotTimeLogOrderByInput>;
  skip?: number;
  take?: number;
};
