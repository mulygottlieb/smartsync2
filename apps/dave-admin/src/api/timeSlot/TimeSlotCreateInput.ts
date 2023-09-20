import { TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput } from "./TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ActivityCreateNestedManyWithoutTimeSlotsInput } from "./ActivityCreateNestedManyWithoutTimeSlotsInput";
import { ScreenshotCreateNestedManyWithoutTimeSlotsInput } from "./ScreenshotCreateNestedManyWithoutTimeSlotsInput";
import { TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput } from "./TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput";

export type TimeSlotCreateInput = {
  timeSlotTimeLogs?: TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput;
  duration: number;
  keyboard: number;
  mouse: number;
  overall: number;
  startedAt: Date;
  employee: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  activity?: ActivityCreateNestedManyWithoutTimeSlotsInput;
  screenshot?: ScreenshotCreateNestedManyWithoutTimeSlotsInput;
  timeSlotMinute?: TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput;
};
