import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { SkillEmployeeListRelationFilter } from "../skillEmployee/SkillEmployeeListRelationFilter";
import { SkillOrganizationListRelationFilter } from "../skillOrganization/SkillOrganizationListRelationFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  color?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  skillEmployee?: SkillEmployeeListRelationFilter;
  skillOrganization?: SkillOrganizationListRelationFilter;
};
