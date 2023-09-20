import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateEmploymentTypeListRelationFilter } from "../candidateEmploymentType/CandidateEmploymentTypeListRelationFilter";
import { OrganizationEmploymentTypeEmployeeListRelationFilter } from "../organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeListRelationFilter";
import { TagOrganizationEmploymentTypeListRelationFilter } from "../tagOrganizationEmploymentType/TagOrganizationEmploymentTypeListRelationFilter";

export type OrganizationEmploymentTypeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  candidateEmploymentType?: CandidateEmploymentTypeListRelationFilter;
  organizationEmploymentTypeEmployee?: OrganizationEmploymentTypeEmployeeListRelationFilter;
  tagOrganizationEmploymentType?: TagOrganizationEmploymentTypeListRelationFilter;
};
