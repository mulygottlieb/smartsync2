import { EmployeeLevel } from "../employeeLevel/EmployeeLevel";
import { Tag } from "../tag/Tag";

export type TagEmployeeLevel = {
  employeeLevel?: EmployeeLevel;
  tag?: Tag;
  id: string;
};
