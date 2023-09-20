import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";

export type EmployeeJobPresetCreateInput = {
  employee: EmployeeWhereUniqueInput;
  jobPreset: JobPresetWhereUniqueInput;
};
