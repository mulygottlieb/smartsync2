import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";

export type TagRequestApprovalCreateInput = {
  tag: TagWhereUniqueInput;
  requestApproval: RequestApprovalWhereUniqueInput;
};
