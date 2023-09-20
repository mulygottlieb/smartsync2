import { Employee } from "../employee/Employee";
import { JobPreset } from "../jobPreset/JobPreset";

export type EmployeeJobPreset = {
  employee?: Employee;
  jobPreset?: JobPreset;
  id: string;
};
