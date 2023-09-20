import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TagEmployeeCreateInput = {
  tag: TagWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
