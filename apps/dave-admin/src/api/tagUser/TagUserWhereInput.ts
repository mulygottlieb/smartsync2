import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagUserWhereInput = {
  user?: UserWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
