import { TimeOffRequestWhereUniqueInput } from "../timeOffRequest/TimeOffRequestWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TimeOffRequestEmployeeWhereInput = {
  timeOffRequest?: TimeOffRequestWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
