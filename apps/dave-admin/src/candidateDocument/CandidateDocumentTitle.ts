import { CandidateDocument as TCandidateDocument } from "../api/candidateDocument/CandidateDocument";

export const CANDIDATEDOCUMENT_TITLE_FIELD = "name";

export const CandidateDocumentTitle = (record: TCandidateDocument): string => {
  return record.name?.toString() || String(record.id);
};
