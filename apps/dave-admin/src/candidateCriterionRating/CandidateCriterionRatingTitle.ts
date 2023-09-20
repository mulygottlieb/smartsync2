import { CandidateCriterionRating as TCandidateCriterionRating } from "../api/candidateCriterionRating/CandidateCriterionRating";

export const CANDIDATECRITERIONRATING_TITLE_FIELD = "id";

export const CandidateCriterionRatingTitle = (
  record: TCandidateCriterionRating
): string => {
  return record.id?.toString() || String(record.id);
};
