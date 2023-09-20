import { TimeSlotTimeLogListRelationFilter } from "../timeSlotTimeLog/TimeSlotTimeLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { ScreenshotListRelationFilter } from "../screenshot/ScreenshotListRelationFilter";
import { TimeSlotMinuteListRelationFilter } from "../timeSlotMinute/TimeSlotMinuteListRelationFilter";

export type TimeSlotWhereInput = {
  timeSlotTimeLogs?: TimeSlotTimeLogListRelationFilter;
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  duration?: IntFilter;
  keyboard?: IntFilter;
  mouse?: IntFilter;
  overall?: IntFilter;
  startedAt?: DateTimeFilter;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  activity?: ActivityListRelationFilter;
  screenshot?: ScreenshotListRelationFilter;
  timeSlotMinute?: TimeSlotMinuteListRelationFilter;
};
