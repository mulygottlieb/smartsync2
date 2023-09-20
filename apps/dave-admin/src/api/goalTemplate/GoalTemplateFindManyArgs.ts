import { GoalTemplateWhereInput } from "./GoalTemplateWhereInput";
import { GoalTemplateOrderByInput } from "./GoalTemplateOrderByInput";

export type GoalTemplateFindManyArgs = {
  where?: GoalTemplateWhereInput;
  orderBy?: Array<GoalTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
