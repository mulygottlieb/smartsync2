import { CandidateFeedback as TCandidateFeedback } from "../api/candidateFeedback/CandidateFeedback";

export const CANDIDATEFEEDBACK_TITLE_FIELD = "description";

export const CandidateFeedbackTitle = (record: TCandidateFeedback): string => {
  return record.description?.toString() || String(record.id);
};
