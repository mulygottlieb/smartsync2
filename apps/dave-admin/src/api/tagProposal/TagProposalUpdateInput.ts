import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagProposalUpdateInput = {
  proposal?: ProposalWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
