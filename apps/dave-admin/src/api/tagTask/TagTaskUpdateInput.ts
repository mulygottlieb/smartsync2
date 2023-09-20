import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagTaskUpdateInput = {
  task?: TaskWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
