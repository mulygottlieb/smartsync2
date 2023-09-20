import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GoalTemplateWhereUniqueInput } from "../goalTemplate/GoalTemplateWhereUniqueInput";
import { GoalKpiTemplateWhereUniqueInput } from "../goalKpiTemplate/GoalKpiTemplateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type KeyResultTemplateWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  typeField?: StringFilter;
  unit?: StringNullableFilter;
  targetValue?: IntNullableFilter;
  initialValue?: IntNullableFilter;
  deadline?: StringFilter;
  goalTemplate?: GoalTemplateWhereUniqueInput;
  goalKpiTemplate?: GoalKpiTemplateWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
