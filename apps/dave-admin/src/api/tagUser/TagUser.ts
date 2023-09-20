import { User } from "../user/User";
import { Tag } from "../tag/Tag";

export type TagUser = {
  user?: User;
  tag?: Tag;
  id: string;
};
