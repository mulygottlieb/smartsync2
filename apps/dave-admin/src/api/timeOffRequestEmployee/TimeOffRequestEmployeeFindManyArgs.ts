import { TimeOffRequestEmployeeWhereInput } from "./TimeOffRequestEmployeeWhereInput";
import { TimeOffRequestEmployeeOrderByInput } from "./TimeOffRequestEmployeeOrderByInput";

export type TimeOffRequestEmployeeFindManyArgs = {
  where?: TimeOffRequestEmployeeWhereInput;
  orderBy?: Array<TimeOffRequestEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
