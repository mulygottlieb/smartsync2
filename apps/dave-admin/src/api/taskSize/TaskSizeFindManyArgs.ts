import { TaskSizeWhereInput } from "./TaskSizeWhereInput";
import { TaskSizeOrderByInput } from "./TaskSizeOrderByInput";

export type TaskSizeFindManyArgs = {
  where?: TaskSizeWhereInput;
  orderBy?: Array<TaskSizeOrderByInput>;
  skip?: number;
  take?: number;
};
