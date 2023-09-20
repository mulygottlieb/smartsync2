import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillEmployeeUpdateInput = {
  employee?: EmployeeWhereUniqueInput;
  skill?: SkillWhereUniqueInput;
};
