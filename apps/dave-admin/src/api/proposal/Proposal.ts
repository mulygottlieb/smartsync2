import { Tenant } from "../tenant/Tenant";
import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Organization } from "../organization/Organization";
import { Employee } from "../employee/Employee";
import { TagProposal } from "../tagProposal/TagProposal";

export type Proposal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  jobPostUrl: string | null;
  valueDate: Date | null;
  jobPostContent: string;
  proposalContent: string;
  status: string;
  tenant?: Tenant | null;
  organizationContact?: OrganizationContact | null;
  organization?: Organization | null;
  employee?: Employee | null;
  tagProposal?: Array<TagProposal>;
};
