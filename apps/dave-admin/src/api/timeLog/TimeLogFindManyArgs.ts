import { TimeLogWhereInput } from "./TimeLogWhereInput";
import { TimeLogOrderByInput } from "./TimeLogOrderByInput";

export type TimeLogFindManyArgs = {
  where?: TimeLogWhereInput;
  orderBy?: Array<TimeLogOrderByInput>;
  skip?: number;
  take?: number;
};
