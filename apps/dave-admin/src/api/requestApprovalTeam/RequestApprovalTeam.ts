import { RequestApproval } from "../requestApproval/RequestApproval";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";

export type RequestApprovalTeam = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: number | null;
  requestApproval?: RequestApproval;
  organization?: Organization | null;
  tenant?: Tenant | null;
  organizationTeam?: OrganizationTeam;
};
