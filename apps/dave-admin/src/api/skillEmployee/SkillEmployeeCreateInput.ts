import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillEmployeeCreateInput = {
  employee: EmployeeWhereUniqueInput;
  skill: SkillWhereUniqueInput;
};
