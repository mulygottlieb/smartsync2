import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { KeyResultWhereUniqueInput } from "../keyResult/KeyResultWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { KeyResultListRelationFilter } from "../keyResult/KeyResultListRelationFilter";

export type GoalWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringFilter;
  deadline?: StringFilter;
  level?: StringFilter;
  progress?: IntFilter;
  employeeGoalOwnerEmployeeIdToemployee?: EmployeeWhereUniqueInput;
  keyResultGoalAlignedKeyResultIdTokeyResult?: KeyResultWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  employeeGoalLeadIdToemployee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  keyResultKeyResultGoalIdTogoal?: KeyResultListRelationFilter;
};
