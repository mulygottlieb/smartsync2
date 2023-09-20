import { TagProposalWhereInput } from "./TagProposalWhereInput";
import { TagProposalOrderByInput } from "./TagProposalOrderByInput";

export type TagProposalFindManyArgs = {
  where?: TagProposalWhereInput;
  orderBy?: Array<TagProposalOrderByInput>;
  skip?: number;
  take?: number;
};
