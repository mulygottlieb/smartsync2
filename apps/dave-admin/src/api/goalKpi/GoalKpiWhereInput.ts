import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KeyResultListRelationFilter } from "../keyResult/KeyResultListRelationFilter";

export type GoalKpiWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  typeField?: StringFilter;
  unit?: StringNullableFilter;
  operator?: StringFilter;
  currentValue?: IntFilter;
  targetValue?: IntFilter;
  tenant?: TenantWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  keyResult?: KeyResultListRelationFilter;
};
