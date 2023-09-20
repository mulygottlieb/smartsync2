import { CandidateExperience as TCandidateExperience } from "../api/candidateExperience/CandidateExperience";

export const CANDIDATEEXPERIENCE_TITLE_FIELD = "occupation";

export const CandidateExperienceTitle = (
  record: TCandidateExperience
): string => {
  return record.occupation?.toString() || String(record.id);
};
