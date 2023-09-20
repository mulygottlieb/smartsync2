import { TagProposal as TTagProposal } from "../api/tagProposal/TagProposal";

export const TAGPROPOSAL_TITLE_FIELD = "id";

export const TagProposalTitle = (record: TTagProposal): string => {
  return record.id?.toString() || String(record.id);
};
