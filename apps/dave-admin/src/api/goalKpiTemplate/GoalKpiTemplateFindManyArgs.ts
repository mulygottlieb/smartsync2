import { GoalKpiTemplateWhereInput } from "./GoalKpiTemplateWhereInput";
import { GoalKpiTemplateOrderByInput } from "./GoalKpiTemplateOrderByInput";

export type GoalKpiTemplateFindManyArgs = {
  where?: GoalKpiTemplateWhereInput;
  orderBy?: Array<GoalKpiTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
