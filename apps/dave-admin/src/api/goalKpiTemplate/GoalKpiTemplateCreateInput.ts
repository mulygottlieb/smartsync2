import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { KeyResultTemplateCreateNestedManyWithoutGoalKpiTemplatesInput } from "./KeyResultTemplateCreateNestedManyWithoutGoalKpiTemplatesInput";

export type GoalKpiTemplateCreateInput = {
  name: string;
  description?: string | null;
  typeField: string;
  unit?: string | null;
  operator: string;
  currentValue: number;
  targetValue: number;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  keyResultTemplate?: KeyResultTemplateCreateNestedManyWithoutGoalKpiTemplatesInput;
};
