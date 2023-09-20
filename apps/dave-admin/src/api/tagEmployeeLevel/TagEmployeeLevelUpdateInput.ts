import { EmployeeLevelWhereUniqueInput } from "../employeeLevel/EmployeeLevelWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagEmployeeLevelUpdateInput = {
  employeeLevel?: EmployeeLevelWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
