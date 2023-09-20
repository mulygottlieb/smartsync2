import { CandidateExperienceWhereInput } from "./CandidateExperienceWhereInput";
import { CandidateExperienceOrderByInput } from "./CandidateExperienceOrderByInput";

export type CandidateExperienceFindManyArgs = {
  where?: CandidateExperienceWhereInput;
  orderBy?: Array<CandidateExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
