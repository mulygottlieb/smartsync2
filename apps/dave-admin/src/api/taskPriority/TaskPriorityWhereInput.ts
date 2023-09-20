import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type TaskPriorityWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  value?: StringFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  color?: StringNullableFilter;
  isSystem?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
};
