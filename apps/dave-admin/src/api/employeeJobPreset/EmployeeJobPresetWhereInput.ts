import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JobPresetWhereUniqueInput } from "../jobPreset/JobPresetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeJobPresetWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  jobPreset?: JobPresetWhereUniqueInput;
  id?: StringFilter;
};
