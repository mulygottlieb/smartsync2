import { GoalKpiWhereInput } from "./GoalKpiWhereInput";
import { GoalKpiOrderByInput } from "./GoalKpiOrderByInput";

export type GoalKpiFindManyArgs = {
  where?: GoalKpiWhereInput;
  orderBy?: Array<GoalKpiOrderByInput>;
  skip?: number;
  take?: number;
};
