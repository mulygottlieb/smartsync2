import { TaskEmployeeWhereInput } from "./TaskEmployeeWhereInput";
import { TaskEmployeeOrderByInput } from "./TaskEmployeeOrderByInput";

export type TaskEmployeeFindManyArgs = {
  where?: TaskEmployeeWhereInput;
  orderBy?: Array<TaskEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
