import { Tag } from "../tag/Tag";
import { Employee } from "../employee/Employee";

export type TagEmployee = {
  tag?: Tag;
  employee?: Employee;
  id: string;
};
