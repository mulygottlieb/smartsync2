import { CandidateSource as TCandidateSource } from "../api/candidateSource/CandidateSource";

export const CANDIDATESOURCE_TITLE_FIELD = "name";

export const CandidateSourceTitle = (record: TCandidateSource): string => {
  return record.name?.toString() || String(record.id);
};
