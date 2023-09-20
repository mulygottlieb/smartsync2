import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TaskEmployeeCreateInput = {
  task: TaskWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
