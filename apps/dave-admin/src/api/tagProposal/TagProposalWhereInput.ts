import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagProposalWhereInput = {
  proposal?: ProposalWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
