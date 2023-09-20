import { Employee } from "../employee/Employee";
import { Skill } from "../skill/Skill";

export type SkillEmployee = {
  employee?: Employee;
  skill?: Skill;
  id: string;
};
