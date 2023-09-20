import { Task } from "../task/Task";
import { Employee } from "../employee/Employee";

export type TaskEmployee = {
  task?: Task;
  employee?: Employee;
  id: string;
};
