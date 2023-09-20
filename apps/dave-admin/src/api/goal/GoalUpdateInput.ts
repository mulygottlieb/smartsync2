import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { KeyResultWhereUniqueInput } from "../keyResult/KeyResultWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KeyResultUpdateManyWithoutGoalsInput } from "./KeyResultUpdateManyWithoutGoalsInput";

export type GoalUpdateInput = {
  name?: string;
  description?: string;
  deadline?: string;
  level?: string;
  progress?: number;
  employeeGoalOwnerEmployeeIdToemployee?: EmployeeWhereUniqueInput | null;
  keyResultGoalAlignedKeyResultIdTokeyResult?: KeyResultWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  employeeGoalLeadIdToemployee?: EmployeeWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  keyResultKeyResultGoalIdTogoal?: KeyResultUpdateManyWithoutGoalsInput;
};
