import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagUserCreateInput = {
  user: UserWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
