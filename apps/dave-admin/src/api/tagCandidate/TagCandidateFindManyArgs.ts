import { TagCandidateWhereInput } from "./TagCandidateWhereInput";
import { TagCandidateOrderByInput } from "./TagCandidateOrderByInput";

export type TagCandidateFindManyArgs = {
  where?: TagCandidateWhereInput;
  orderBy?: Array<TagCandidateOrderByInput>;
  skip?: number;
  take?: number;
};
