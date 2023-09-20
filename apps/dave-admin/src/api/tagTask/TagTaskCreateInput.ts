import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagTaskCreateInput = {
  task: TaskWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
