import { CandidatePersonalQuality as TCandidatePersonalQuality } from "../api/candidatePersonalQuality/CandidatePersonalQuality";

export const CANDIDATEPERSONALQUALITY_TITLE_FIELD = "name";

export const CandidatePersonalQualityTitle = (
  record: TCandidatePersonalQuality
): string => {
  return record.name?.toString() || String(record.id);
};
