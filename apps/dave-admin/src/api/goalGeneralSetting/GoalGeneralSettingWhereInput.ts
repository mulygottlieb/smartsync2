import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type GoalGeneralSettingWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  maxObjectives?: IntFilter;
  maxKeyResults?: IntFilter;
  employeeCanCreateObjective?: BooleanFilter;
  canOwnObjectives?: StringFilter;
  canOwnKeyResult?: StringFilter;
  krTypeKPI?: BooleanFilter;
  krTypeTask?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
