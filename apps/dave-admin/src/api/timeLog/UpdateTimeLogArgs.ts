import { TimeLogWhereUniqueInput } from "./TimeLogWhereUniqueInput";
import { TimeLogUpdateInput } from "./TimeLogUpdateInput";

export type UpdateTimeLogArgs = {
  where: TimeLogWhereUniqueInput;
  data: TimeLogUpdateInput;
};
