import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagCandidateUpdateInput = {
  candidate?: CandidateWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
