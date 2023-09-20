import { CandidateDocumentWhereInput } from "./CandidateDocumentWhereInput";
import { CandidateDocumentOrderByInput } from "./CandidateDocumentOrderByInput";

export type CandidateDocumentFindManyArgs = {
  where?: CandidateDocumentWhereInput;
  orderBy?: Array<CandidateDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
