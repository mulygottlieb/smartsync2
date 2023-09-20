import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { CandidateDepartmentListRelationFilter } from "../candidateDepartment/CandidateDepartmentListRelationFilter";
import { InviteOrganizationDepartmentListRelationFilter } from "../inviteOrganizationDepartment/InviteOrganizationDepartmentListRelationFilter";
import { OrganizationDepartmentEmployeeListRelationFilter } from "../organizationDepartmentEmployee/OrganizationDepartmentEmployeeListRelationFilter";
import { TagOrganizationDepartmentListRelationFilter } from "../tagOrganizationDepartment/TagOrganizationDepartmentListRelationFilter";

export type OrganizationDepartmentWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  candidateDepartment?: CandidateDepartmentListRelationFilter;
  inviteOrganizationDepartment?: InviteOrganizationDepartmentListRelationFilter;
  organizationDepartmentEmployee?: OrganizationDepartmentEmployeeListRelationFilter;
  tagOrganizationDepartment?: TagOrganizationDepartmentListRelationFilter;
};
