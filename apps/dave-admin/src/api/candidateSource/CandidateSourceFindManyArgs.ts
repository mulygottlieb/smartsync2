import { CandidateSourceWhereInput } from "./CandidateSourceWhereInput";
import { CandidateSourceOrderByInput } from "./CandidateSourceOrderByInput";

export type CandidateSourceFindManyArgs = {
  where?: CandidateSourceWhereInput;
  orderBy?: Array<CandidateSourceOrderByInput>;
  skip?: number;
  take?: number;
};
