import { CandidateTechnology as TCandidateTechnology } from "../api/candidateTechnology/CandidateTechnology";

export const CANDIDATETECHNOLOGY_TITLE_FIELD = "name";

export const CandidateTechnologyTitle = (
  record: TCandidateTechnology
): string => {
  return record.name?.toString() || String(record.id);
};
