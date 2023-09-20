import { RequestApprovalTeamWhereInput } from "./RequestApprovalTeamWhereInput";
import { RequestApprovalTeamOrderByInput } from "./RequestApprovalTeamOrderByInput";

export type RequestApprovalTeamFindManyArgs = {
  where?: RequestApprovalTeamWhereInput;
  orderBy?: Array<RequestApprovalTeamOrderByInput>;
  skip?: number;
  take?: number;
};
