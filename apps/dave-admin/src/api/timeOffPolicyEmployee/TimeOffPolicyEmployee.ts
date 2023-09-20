import { TimeOffPolicy } from "../timeOffPolicy/TimeOffPolicy";
import { Employee } from "../employee/Employee";

export type TimeOffPolicyEmployee = {
  timeOffPolicy?: TimeOffPolicy;
  employee?: Employee;
  id: string;
};
