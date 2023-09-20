import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type EmployeeTasksTaskUpdateInput = {
  task?: TaskWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
