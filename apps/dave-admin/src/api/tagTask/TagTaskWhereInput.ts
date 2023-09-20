import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagTaskWhereInput = {
  task?: TaskWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
