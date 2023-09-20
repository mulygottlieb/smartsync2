import { ApprovalPolicyWhereUniqueInput } from "../approvalPolicy/ApprovalPolicyWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RequestApprovalEmployeeUpdateManyWithoutRequestApprovalsInput } from "./RequestApprovalEmployeeUpdateManyWithoutRequestApprovalsInput";
import { RequestApprovalTeamUpdateManyWithoutRequestApprovalsInput } from "./RequestApprovalTeamUpdateManyWithoutRequestApprovalsInput";
import { TagRequestApprovalUpdateManyWithoutRequestApprovalsInput } from "./TagRequestApprovalUpdateManyWithoutRequestApprovalsInput";

export type RequestApprovalUpdateInput = {
  name?: string;
  status?: number | null;
  createdBy?: string | null;
  createdByName?: string | null;
  minCount?: number | null;
  requestId?: string | null;
  requestType?: string | null;
  approvalPolicy?: ApprovalPolicyWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  requestApprovalEmployee?: RequestApprovalEmployeeUpdateManyWithoutRequestApprovalsInput;
  requestApprovalTeam?: RequestApprovalTeamUpdateManyWithoutRequestApprovalsInput;
  tagRequestApproval?: TagRequestApprovalUpdateManyWithoutRequestApprovalsInput;
};
