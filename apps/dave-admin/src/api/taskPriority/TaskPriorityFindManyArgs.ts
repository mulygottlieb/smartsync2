import { TaskPriorityWhereInput } from "./TaskPriorityWhereInput";
import { TaskPriorityOrderByInput } from "./TaskPriorityOrderByInput";

export type TaskPriorityFindManyArgs = {
  where?: TaskPriorityWhereInput;
  orderBy?: Array<TaskPriorityOrderByInput>;
  skip?: number;
  take?: number;
};
