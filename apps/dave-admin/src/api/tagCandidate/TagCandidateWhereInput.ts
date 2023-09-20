import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagCandidateWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
