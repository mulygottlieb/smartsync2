import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SkillEmployeeWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  skill?: SkillWhereUniqueInput;
  id?: StringFilter;
};
