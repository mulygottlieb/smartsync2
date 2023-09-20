import { TimeOffRequest } from "../timeOffRequest/TimeOffRequest";
import { Employee } from "../employee/Employee";

export type TimeOffRequestEmployee = {
  timeOffRequest?: TimeOffRequest;
  employee?: Employee;
  id: string;
};
