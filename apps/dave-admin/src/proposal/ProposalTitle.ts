import { Proposal as TProposal } from "../api/proposal/Proposal";

export const PROPOSAL_TITLE_FIELD = "jobPostUrl";

export const ProposalTitle = (record: TProposal): string => {
  return record.jobPostUrl?.toString() || String(record.id);
};
