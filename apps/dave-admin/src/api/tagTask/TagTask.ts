import { Task } from "../task/Task";
import { Tag } from "../tag/Tag";

export type TagTask = {
  task?: Task;
  tag?: Tag;
  id: string;
};
