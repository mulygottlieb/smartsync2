import { CandidateSkillWhereInput } from "./CandidateSkillWhereInput";
import { CandidateSkillOrderByInput } from "./CandidateSkillOrderByInput";

export type CandidateSkillFindManyArgs = {
  where?: CandidateSkillWhereInput;
  orderBy?: Array<CandidateSkillOrderByInput>;
  skip?: number;
  take?: number;
};
