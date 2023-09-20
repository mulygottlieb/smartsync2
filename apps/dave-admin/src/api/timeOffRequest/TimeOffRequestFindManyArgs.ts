import { TimeOffRequestWhereInput } from "./TimeOffRequestWhereInput";
import { TimeOffRequestOrderByInput } from "./TimeOffRequestOrderByInput";

export type TimeOffRequestFindManyArgs = {
  where?: TimeOffRequestWhereInput;
  orderBy?: Array<TimeOffRequestOrderByInput>;
  skip?: number;
  take?: number;
};
