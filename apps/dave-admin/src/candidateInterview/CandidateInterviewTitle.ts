import { CandidateInterview as TCandidateInterview } from "../api/candidateInterview/CandidateInterview";

export const CANDIDATEINTERVIEW_TITLE_FIELD = "title";

export const CandidateInterviewTitle = (
  record: TCandidateInterview
): string => {
  return record.title?.toString() || String(record.id);
};
