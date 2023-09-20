import { CandidateInterviewer as TCandidateInterviewer } from "../api/candidateInterviewer/CandidateInterviewer";

export const CANDIDATEINTERVIEWER_TITLE_FIELD = "id";

export const CandidateInterviewerTitle = (
  record: TCandidateInterviewer
): string => {
  return record.id?.toString() || String(record.id);
};
