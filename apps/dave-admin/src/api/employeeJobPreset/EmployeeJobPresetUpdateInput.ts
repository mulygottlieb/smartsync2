import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";

export type EmployeeJobPresetUpdateInput = {
  employee?: EmployeeWhereUniqueInput;
  jobPreset?: JobPresetWhereUniqueInput;
};
