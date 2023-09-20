import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";

export type TagRequestApprovalUpdateInput = {
  tag?: TagWhereUniqueInput;
  requestApproval?: RequestApprovalWhereUniqueInput;
};
