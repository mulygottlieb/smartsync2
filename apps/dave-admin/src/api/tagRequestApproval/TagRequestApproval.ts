import { Tag } from "../tag/Tag";
import { RequestApproval } from "../requestApproval/RequestApproval";

export type TagRequestApproval = {
  tag?: Tag;
  requestApproval?: RequestApproval;
  id: string;
};
