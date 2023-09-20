import { Proposal } from "../proposal/Proposal";
import { Tag } from "../tag/Tag";

export type TagProposal = {
  proposal?: Proposal;
  tag?: Tag;
  id: string;
};
