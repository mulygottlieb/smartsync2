import { CandidateEducation as TCandidateEducation } from "../api/candidateEducation/CandidateEducation";

export const CANDIDATEEDUCATION_TITLE_FIELD = "schoolName";

export const CandidateEducationTitle = (
  record: TCandidateEducation
): string => {
  return record.schoolName?.toString() || String(record.id);
};
