import { CandidateEducationWhereInput } from "./CandidateEducationWhereInput";
import { CandidateEducationOrderByInput } from "./CandidateEducationOrderByInput";

export type CandidateEducationFindManyArgs = {
  where?: CandidateEducationWhereInput;
  orderBy?: Array<CandidateEducationOrderByInput>;
  skip?: number;
  take?: number;
};
