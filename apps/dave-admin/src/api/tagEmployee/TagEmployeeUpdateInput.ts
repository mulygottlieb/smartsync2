import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TagEmployeeUpdateInput = {
  tag?: TagWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
