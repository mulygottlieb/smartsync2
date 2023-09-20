import { TimeOffRequestWhereUniqueInput } from "../timeOffRequest/TimeOffRequestWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TimeOffRequestEmployeeUpdateInput = {
  timeOffRequest?: TimeOffRequestWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
