import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagProposalCreateInput = {
  proposal: ProposalWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
