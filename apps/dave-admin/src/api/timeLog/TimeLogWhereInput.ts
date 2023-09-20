import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TimesheetWhereUniqueInput } from "../timesheet/TimesheetWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TimeSlotTimeLogListRelationFilter } from "../timeSlotTimeLog/TimeSlotTimeLogListRelationFilter";

export type TimeLogWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  startedAt?: DateTimeNullableFilter;
  stoppedAt?: DateTimeNullableFilter;
  logType?: StringFilter;
  source?: StringFilter;
  description?: StringNullableFilter;
  reason?: StringNullableFilter;
  isBillable?: BooleanFilter;
  deletedAt?: DateTimeNullableFilter;
  isRunning?: BooleanNullableFilter;
  version?: StringNullableFilter;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
  task?: TaskWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
  timesheet?: TimesheetWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  timeSlotTimeLogs?: TimeSlotTimeLogListRelationFilter;
};
