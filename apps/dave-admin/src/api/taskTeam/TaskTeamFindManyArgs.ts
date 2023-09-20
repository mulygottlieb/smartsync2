import { TaskTeamWhereInput } from "./TaskTeamWhereInput";
import { TaskTeamOrderByInput } from "./TaskTeamOrderByInput";

export type TaskTeamFindManyArgs = {
  where?: TaskTeamWhereInput;
  orderBy?: Array<TaskTeamOrderByInput>;
  skip?: number;
  take?: number;
};
