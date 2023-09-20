import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { TagOrganizationPositionListRelationFilter } from "../tagOrganizationPosition/TagOrganizationPositionListRelationFilter";

export type OrganizationPositionWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  candidate?: CandidateListRelationFilter;
  employee?: EmployeeListRelationFilter;
  tagOrganizationPosition?: TagOrganizationPositionListRelationFilter;
};
