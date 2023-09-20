import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TaskEmployeeUpdateInput = {
  task?: TaskWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
