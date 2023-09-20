import { CandidateInterviewerWhereInput } from "./CandidateInterviewerWhereInput";
import { CandidateInterviewerOrderByInput } from "./CandidateInterviewerOrderByInput";

export type CandidateInterviewerFindManyArgs = {
  where?: CandidateInterviewerWhereInput;
  orderBy?: Array<CandidateInterviewerOrderByInput>;
  skip?: number;
  take?: number;
};
