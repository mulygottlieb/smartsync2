import { EmployeeLevelWhereUniqueInput } from "../employeeLevel/EmployeeLevelWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagEmployeeLevelCreateInput = {
  employeeLevel: EmployeeLevelWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
