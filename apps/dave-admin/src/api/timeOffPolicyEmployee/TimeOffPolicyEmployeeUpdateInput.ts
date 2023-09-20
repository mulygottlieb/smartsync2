import { TimeOffPolicyWhereUniqueInput } from "../timeOffPolicy/TimeOffPolicyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TimeOffPolicyEmployeeUpdateInput = {
  timeOffPolicy?: TimeOffPolicyWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
