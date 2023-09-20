import { Task } from "../task/Task";
import { Employee } from "../employee/Employee";

export type EmployeeTasksTask = {
  task?: Task;
  employee?: Employee;
  id: string;
};
