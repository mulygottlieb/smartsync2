import { Candidate } from "../candidate/Candidate";
import { Tag } from "../tag/Tag";

export type TagCandidate = {
  candidate?: Candidate;
  tag?: Tag;
  id: string;
};
