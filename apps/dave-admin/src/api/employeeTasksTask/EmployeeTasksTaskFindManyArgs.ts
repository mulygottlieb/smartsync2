import { EmployeeTasksTaskWhereInput } from "./EmployeeTasksTaskWhereInput";
import { EmployeeTasksTaskOrderByInput } from "./EmployeeTasksTaskOrderByInput";

export type EmployeeTasksTaskFindManyArgs = {
  where?: EmployeeTasksTaskWhereInput;
  orderBy?: Array<EmployeeTasksTaskOrderByInput>;
  skip?: number;
  take?: number;
};
