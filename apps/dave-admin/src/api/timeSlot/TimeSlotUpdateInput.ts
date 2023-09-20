import { TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput } from "./TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ActivityUpdateManyWithoutTimeSlotsInput } from "./ActivityUpdateManyWithoutTimeSlotsInput";
import { ScreenshotUpdateManyWithoutTimeSlotsInput } from "./ScreenshotUpdateManyWithoutTimeSlotsInput";
import { TimeSlotMinuteUpdateManyWithoutTimeSlotsInput } from "./TimeSlotMinuteUpdateManyWithoutTimeSlotsInput";

export type TimeSlotUpdateInput = {
  timeSlotTimeLogs?: TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput;
  duration?: number;
  keyboard?: number;
  mouse?: number;
  overall?: number;
  startedAt?: Date;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  activity?: ActivityUpdateManyWithoutTimeSlotsInput;
  screenshot?: ScreenshotUpdateManyWithoutTimeSlotsInput;
  timeSlotMinute?: TimeSlotMinuteUpdateManyWithoutTimeSlotsInput;
};
