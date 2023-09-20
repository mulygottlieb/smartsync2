import { CandidateEmploymentType as TCandidateEmploymentType } from "../api/candidateEmploymentType/CandidateEmploymentType";

export const CANDIDATEEMPLOYMENTTYPE_TITLE_FIELD = "id";

export const CandidateEmploymentTypeTitle = (
  record: TCandidateEmploymentType
): string => {
  return record.id?.toString() || String(record.id);
};
