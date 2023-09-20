import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagRequestApprovalWhereInput = {
  tag?: TagWhereUniqueInput;
  requestApproval?: RequestApprovalWhereUniqueInput;
  id?: StringFilter;
};
