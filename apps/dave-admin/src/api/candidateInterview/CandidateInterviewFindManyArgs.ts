import { CandidateInterviewWhereInput } from "./CandidateInterviewWhereInput";
import { CandidateInterviewOrderByInput } from "./CandidateInterviewOrderByInput";

export type CandidateInterviewFindManyArgs = {
  where?: CandidateInterviewWhereInput;
  orderBy?: Array<CandidateInterviewOrderByInput>;
  skip?: number;
  take?: number;
};
