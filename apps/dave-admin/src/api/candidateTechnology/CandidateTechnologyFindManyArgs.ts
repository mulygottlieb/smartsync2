import { CandidateTechnologyWhereInput } from "./CandidateTechnologyWhereInput";
import { CandidateTechnologyOrderByInput } from "./CandidateTechnologyOrderByInput";

export type CandidateTechnologyFindManyArgs = {
  where?: CandidateTechnologyWhereInput;
  orderBy?: Array<CandidateTechnologyOrderByInput>;
  skip?: number;
  take?: number;
};
