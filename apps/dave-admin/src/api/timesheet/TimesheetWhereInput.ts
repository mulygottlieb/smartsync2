import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeLogListRelationFilter } from "../timeLog/TimeLogListRelationFilter";

export type TimesheetWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  duration?: IntFilter;
  keyboard?: IntFilter;
  mouse?: IntFilter;
  overall?: IntFilter;
  startedAt?: DateTimeNullableFilter;
  stoppedAt?: DateTimeNullableFilter;
  approvedAt?: DateTimeNullableFilter;
  submittedAt?: DateTimeNullableFilter;
  lockedAt?: DateTimeNullableFilter;
  isBilled?: BooleanFilter;
  status?: StringFilter;
  deletedAt?: DateTimeNullableFilter;
  tenant?: TenantWhereUniqueInput;
  user?: UserWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  timeLog?: TimeLogListRelationFilter;
};