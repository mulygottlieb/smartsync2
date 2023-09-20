import { ApprovalPolicyWhereUniqueInput } from "../approvalPolicy/ApprovalPolicyWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RequestApprovalEmployeeCreateNestedManyWithoutRequestApprovalsInput } from "./RequestApprovalEmployeeCreateNestedManyWithoutRequestApprovalsInput";
import { RequestApprovalTeamCreateNestedManyWithoutRequestApprovalsInput } from "./RequestApprovalTeamCreateNestedManyWithoutRequestApprovalsInput";
import { TagRequestApprovalCreateNestedManyWithoutRequestApprovalsInput } from "./TagRequestApprovalCreateNestedManyWithoutRequestApprovalsInput";

export type RequestApprovalCreateInput = {
  name: string;
  status?: number | null;
  createdBy?: string | null;
  createdByName?: string | null;
  minCount?: number | null;
  requestId?: string | null;
  requestType?: string | null;
  approvalPolicy?: ApprovalPolicyWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  requestApprovalEmployee?: RequestApprovalEmployeeCreateNestedManyWithoutRequestApprovalsInput;
  requestApprovalTeam?: RequestApprovalTeamCreateNestedManyWithoutRequestApprovalsInput;
  tagRequestApproval?: TagRequestApprovalCreateNestedManyWithoutRequestApprovalsInput;
};
