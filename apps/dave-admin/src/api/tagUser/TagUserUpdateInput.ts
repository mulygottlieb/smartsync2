import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagUserUpdateInput = {
  user?: UserWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
