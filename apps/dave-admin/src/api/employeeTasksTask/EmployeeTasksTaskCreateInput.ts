import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type EmployeeTasksTaskCreateInput = {
  task: TaskWhereUniqueInput;
  employee: EmployeeWhereUniqueInput;
};
