import { TagCandidate as TTagCandidate } from "../api/tagCandidate/TagCandidate";

export const TAGCANDIDATE_TITLE_FIELD = "id";

export const TagCandidateTitle = (record: TTagCandidate): string => {
  return record.id?.toString() || String(record.id);
};
