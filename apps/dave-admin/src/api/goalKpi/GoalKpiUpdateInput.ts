import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KeyResultUpdateManyWithoutGoalKpisInput } from "./KeyResultUpdateManyWithoutGoalKpisInput";

export type GoalKpiUpdateInput = {
  name?: string;
  description?: string | null;
  typeField?: string;
  unit?: string | null;
  operator?: string;
  currentValue?: number;
  targetValue?: number;
  tenant?: TenantWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  keyResult?: KeyResultUpdateManyWithoutGoalKpisInput;
};
