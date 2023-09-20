import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { RequestApproval } from "../requestApproval/RequestApproval";

export type ApprovalPolicy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  approvalType: string | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  requestApproval?: Array<RequestApproval>;
};
