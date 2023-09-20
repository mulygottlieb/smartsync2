import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagCandidateCreateInput = {
  candidate: CandidateWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
