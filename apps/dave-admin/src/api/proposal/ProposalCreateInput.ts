import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TagProposalCreateNestedManyWithoutProposalsInput } from "./TagProposalCreateNestedManyWithoutProposalsInput";

export type ProposalCreateInput = {
  jobPostUrl?: string | null;
  valueDate?: Date | null;
  jobPostContent: string;
  proposalContent: string;
  status: string;
  tenant?: TenantWhereUniqueInput | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  tagProposal?: TagProposalCreateNestedManyWithoutProposalsInput;
};
