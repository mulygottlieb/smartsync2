import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "status";

export const CandidateTitle = (record: TCandidate): string => {
  return record.status?.toString() || String(record.id);
};
