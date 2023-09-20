import { TimeOffRequestWhereUniqueInput } from "../timeOffRequest/TimeOffRequestWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TimeOffRequestEmployeeCreateInput = {
  timeOffRequest: TimeOffRequestWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
