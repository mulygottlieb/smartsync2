import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TagProposalListRelationFilter } from "../tagProposal/TagProposalListRelationFilter";

export type ProposalWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  jobPostUrl?: StringNullableFilter;
  valueDate?: DateTimeNullableFilter;
  jobPostContent?: StringFilter;
  proposalContent?: StringFilter;
  status?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  tagProposal?: TagProposalListRelationFilter;
};
