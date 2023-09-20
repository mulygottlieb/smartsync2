import { CandidateFeedbackWhereInput } from "./CandidateFeedbackWhereInput";
import { CandidateFeedbackOrderByInput } from "./CandidateFeedbackOrderByInput";

export type CandidateFeedbackFindManyArgs = {
  where?: CandidateFeedbackWhereInput;
  orderBy?: Array<CandidateFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};
