import { RequestApprovalWhereInput } from "./RequestApprovalWhereInput";
import { RequestApprovalOrderByInput } from "./RequestApprovalOrderByInput";

export type RequestApprovalFindManyArgs = {
  where?: RequestApprovalWhereInput;
  orderBy?: Array<RequestApprovalOrderByInput>;
  skip?: number;
  take?: number;
};
