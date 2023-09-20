import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type RequestApprovalTeamCreateInput = {
  status?: number | null;
  requestApproval: RequestApprovalWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organizationTeam: OrganizationTeamWhereUniqueInput;
};
