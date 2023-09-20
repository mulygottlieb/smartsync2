import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { KeyResultTemplateListRelationFilter } from "../keyResultTemplate/KeyResultTemplateListRelationFilter";

export type GoalKpiTemplateWhereInput = {
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
  organization?: OrganizationWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  keyResultTemplate?: KeyResultTemplateListRelationFilter;
};
