import { EmployeeLevelWhereUniqueInput } from "../employeeLevel/EmployeeLevelWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagEmployeeLevelWhereInput = {
  employeeLevel?: EmployeeLevelWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
