import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagEmployeeWhereInput = {
  tag?: TagWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
