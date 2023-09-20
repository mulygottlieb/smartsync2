import { TaskVersionWhereInput } from "./TaskVersionWhereInput";
import { TaskVersionOrderByInput } from "./TaskVersionOrderByInput";

export type TaskVersionFindManyArgs = {
  where?: TaskVersionWhereInput;
  orderBy?: Array<TaskVersionOrderByInput>;
  skip?: number;
  take?: number;
};
