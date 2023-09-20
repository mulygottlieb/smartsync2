import { ApprovalPolicy } from "../approvalPolicy/ApprovalPolicy";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { RequestApprovalEmployee } from "../requestApprovalEmployee/RequestApprovalEmployee";
import { RequestApprovalTeam } from "../requestApprovalTeam/RequestApprovalTeam";
import { TagRequestApproval } from "../tagRequestApproval/TagRequestApproval";

export type RequestApproval = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  status: number | null;
  createdBy: string | null;
  createdByName: string | null;
  minCount: number | null;
  requestId: string | null;
  requestType: string | null;
  approvalPolicy?: ApprovalPolicy | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  requestApprovalEmployee?: Array<RequestApprovalEmployee>;
  requestApprovalTeam?: Array<RequestApprovalTeam>;
  tagRequestApproval?: Array<TagRequestApproval>;
};
