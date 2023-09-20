import { GoalTimeFrameWhereInput } from "./GoalTimeFrameWhereInput";
import { GoalTimeFrameOrderByInput } from "./GoalTimeFrameOrderByInput";

export type GoalTimeFrameFindManyArgs = {
  where?: GoalTimeFrameWhereInput;
  orderBy?: Array<GoalTimeFrameOrderByInput>;
  skip?: number;
  take?: number;
};
