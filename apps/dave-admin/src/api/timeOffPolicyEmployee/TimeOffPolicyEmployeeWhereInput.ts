import { TimeOffPolicyWhereUniqueInput } from "../timeOffPolicy/TimeOffPolicyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TimeOffPolicyEmployeeWhereInput = {
  timeOffPolicy?: TimeOffPolicyWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
