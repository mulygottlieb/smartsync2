import { TimeOffPolicyWhereUniqueInput } from "../timeOffPolicy/TimeOffPolicyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TimeOffPolicyEmployeeCreateInput = {
  timeOffPolicy: TimeOffPolicyWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
