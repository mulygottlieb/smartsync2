import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskSizeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  value?: StringFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  color?: StringNullableFilter;
  isSystem?: BooleanFilter;
  organization?: OrganizationWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
